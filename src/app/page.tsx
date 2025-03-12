'use client'

// Define the Link type
import {useState} from "react";

type Link = {
  id: string
  url: string
  icon: string
}

// Predefined links - add your 5 links here
const predefinedLinks: Link[] = [
  {
    id: "1",
    url: "spotify:user:neqc2x0lx374kefrspdpzjy7t",
    icon: "Spotify",
  },
  {
    id: "2",
    url: "https://www.youtube.com/@grimjoff7756",
    icon: "Youtube",
  },
  {
    id: "3",
    url: "https://github.com/Grimjoff",
    icon: "Github",
  },
  {
    id: "4",
    url: "steam://openurl/https://steamcommunity.com/id/Grimjoff",
    icon: "Steam",
  },
  {id: "5",
  url: "https://www.twitch.tv/grimjoff1337",
  icon: "Twitch"},
]

// Icon URLs - you can replace these with actual icon URLs
const iconUrls: Record<string, string> = {
  Spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
  Youtube:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
  Github: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
  Twitch: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2560px-Twitch_logo.svg.png",
  Steam: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
}
const selectIconUrls: Record<string, string> = {
  BattleNet: "https://upload.wikimedia.org/wikipedia/en/a/a8/Battlenet-logo.png",
  Discord: "https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg",
  League: "/League.png"
}
const customMessages: Record<string, string> = {
  BattleNet : 'My Battle.net is Grimjoff#21668',
  Discord : 'My Discord is Grimjoff',
  League: 'My League is 4EsDeath4'
}
export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
    setCustomMessage(customMessages[iconName]);

  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4 py-12 center-flex">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white margin-bottom-8">All my Links and Names</h1>

            {/* Links display */}
            <div className="flex-col-stack max-width-xl center-horizontally">
              {predefinedLinks.map((link) => (
                  <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-container rounded-xl shadow-lg hover-shadow-2xl transparent-background"
                  >
                    <img
                        src={iconUrls[link.icon]}
                        alt={`${link.icon} icon`}
                        className="icon-size"
                    />
                    <span className="text-black text-lg capitalize font-bold">{link.icon}</span>
                  </a>
              ))}
            </div>

            {/* Clickable Icons and Output Text in Flex Row */}
            <div className="flex-row-stack mt-8">
              {/* Clickable Icons */}
              <div className="flex gap-4">
                {Object.entries(selectIconUrls).map(([name, url]) => (
                    <div
                        key={name}
                        className="icon-container transparent-background"
                        onClick={() => handleIconClick(name)}
                    >
                      <img src={url || "/placeholder.svg"} alt={`${name} icon`} className="icon-size" />
                    </div>
                ))}
              </div>

              {/* Output text depending on selected icon */}
              {selectedIcon && (
                  <div className="text-container border-2 border-black rounded-xl p-4 bg-transparent">
                    <p className="text-black text-lg font-bold">
                      <span className="font-bold text-gold">{customMessage}</span>
                    </p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

