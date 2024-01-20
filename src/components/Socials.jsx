import React from "react"

export default function Socials() {
    return (
        <React.Fragment>
            <div>
                <div className="fake-logo"></div>
                <a href="/links">My webrings!</a>
            </div>
            <div>
                <div className="fake-logo"></div>
                <a href="mailto:admin@shr4pnel.com">My email</a>
            </div>
            <div>
                <img
                    src="/graphics/github-mark.svg"
                    alt="github logo"
                    width="32px"
                    height="32px"
                />
                <a href="https://github.com/shrapnelnet/" target="_blank" rel="noreferrer">
                    github/shrapnelnet
                </a>
            </div>
            <div>
                <img src="/graphics/mastodon.svg" alt="mastodon logo" width="32px" height="32px"/>
                <a href="https://blobfox.coffee/@tyler" target="_blank" rel="noreferrer">
                    @tyler@blobfox.coffee
                </a>
            </div>
            <div>
                <img src="/graphics/rss_optimised.png" alt="rss logo" width="32px" height="32px"/>
                <a href="/rss.xml">RSS feed</a>
            </div>
        </React.Fragment>
    )
}