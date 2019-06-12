$(document).ready(() => {
    console.log("got here");
    const guildList = document.getElementsByClassname('GuildSelectionGuilds');
    console.log(guildList);
    addGuilds(guildList);
});

function addGuilds(guildList) {
    $.getJSON('/api/guilds', data => {
        for (const guild of data.guilds) {
            let newGuild = document.createElement('li');
            newGuild.className = 'GuildSelectionGuild';
            if (guild.icon) {
                $(newGuild).append(
                    `<div class="GuildSelectionGuildIcon" style="background-image: url("https://cdn.discordapp.com/icons/${constuctIcon(guild)}");"`
                );
            }
            else {
                let guildNameArray = guild.name.split(' ').trim();
                let guildNameShort = "";
                for(let word in guildNameArray) {
                    guildNameShort += word.substr(0, 1);
                }
                
                $(newGuild).append(
                    `<div class="GuildSelectionGuildIcon" <span>${guildNameShort}</span>`
                );
            }
            $(newGuild).append(
                `<div class="GuildSelectionGuildName" <span>${guild.name}</span>`
            );
            console.log(newGuild);
            guildList.append(newGuild);
        }
    }).fail(() => {
        console.log('Error getting guilds')
    };
};

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

function constructIcon(guild) {
    if (guild.icon) {
        return `${guild.id}/${guild.icon}`;
    }
    return 
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