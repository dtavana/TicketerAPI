$(document).ready(() => {

    updateChannelsInDropdowns();

    $("#activeGuild").change(updateChannelsInDropdowns);

    $("#save-button").click(e => {
        const prefix = $("#prefix").val();
        const transcripts = $("#transcripts").is(':checked');

        postDataField('prefix', prefix);
        postDataField('transcripts', transcripts);
    });

    // POST to a settings API endpoint
    function postDataField(name, value) {
        const guildid = $("#activeGuild option:selected").val();
        const postData = {
            guildid
        }
        postData[name] = value;

        $.post("/api/settings/" + name, postData)
            .done(() => {
                console.log('success')
            })
            .fail((e) => {
                console.error(e.responseText)
            }).always(function () {
                console.log('Finished')
            });
    }

    // Combines getChannelsForGuild() & fillSelectWithChannels()
    // Fills all selects with channels
    async function updateChannelsInDropdowns() {
        const channels = await getChannelsForGuild($("#activeGuild option:selected").val());

        fillSelectWithChannels(channels, $("#log-channel"));
        fillSelectWithChannels(channels, $("#transcript-channel"));
        fillSelectWithChannels(channels, $("#ticket-channel"));
    }

    // Gets channels for a selected guild
    function getChannelsForGuild(guildId) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: "/api/channels",
                dataType: 'json',
                data: {
                    guildId: guildId
                },
                success: function (response) {
                    console.log(response);
                    resolve(response.channels);
                },
                error: function (xhr, status, error) {
                    console.log(xhr)
                    reject(error)
                }
            });
        })

    }

    // Fills a select with channels
    function fillSelectWithChannels(channels, select) {
        select.empty();
        for (const channel of channels) {
            select.append(`<option value="${channel.id}">#${channel.name}</option>`);
        }
    }
});