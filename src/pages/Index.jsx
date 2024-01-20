import React from "react"
import "../style/Index.css"
import IndexPosts from "../components/IndexPosts.jsx"
import { Link } from "react-router-dom"
export default function Index() {
    return (
        <React.Fragment>
            <header>
                <div className="container title-container">
                    <h1 className="logo">shrapnelnet</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <IndexPosts/>
                    <p>or uhh just play <Link to="/minesweeper">minesweeper</Link> :3</p>
                    <img src="/graphics/cutiecat.gif" alt="line of cats dancing"/>
                    <footer>
                        <div id="socials">
                            <h2 className="highlighted">socials</h2>
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
                                <img src="/graphics/mastodon.svg" alt="mastodon logo" width="32px" height="32px" />
                                <a href="https://blobfox.coffee/@tyler" target="_blank" rel="noreferrer">
                                    @tyler@blobfox.coffee
                                </a>
                            </div>
                            <div>
                                <img src="/graphics/rss_optimised.png" alt="rss logo" width="32px" height="32px" />
                                <a href="/rss.xml">RSS feed</a>
                            </div>
                        </div>

                        <div id="friends">
                            <h2 className="highlighted">friends</h2>
                            <div className="friend-container">
                                <a href="/">
                                    <img
                                        src="/buttons/blogbutton.gif"
                                        alt="blog.shr4pnel.com blog button. has a little animated cat called mauzy on it"
                                    />
                                </a>
                                <a href="https://foreverliketh.is">
                                    <img
                                        src="/buttons/foreverliketh.is.png"
                                        alt="foreverliketh.is blog banner. green leaves with light blue text in front"
                                    />
                                </a>
                                <a href="https://angelsaremathematical.neocities.org/" target="_blank" rel="noreferrer">
                                    <img
                                        src="/buttons/angels.png"
                                        alt="pink background with confetti with original apple pink CRT with monospaced font reading angels are mathematical"
                                    />
                                </a>
                                <a href="https://blunt.gay" target="_blank" rel="noreferrer">
                                    <img
                                        src="/buttons/bluntgay.png"
                                        alt="purple outline and text, monospaced, rainbow left aligned, text right aligned"
                                    />
                                </a>
                                <a href="https://gapandfriends.neocities.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="/buttons/IMG_7032.png"
                                        alt="blue chequered backdrop, red text reading: gap &amp; friends"
                                    />
                                </a>
                                <a href="https://aboboracandy.neocities.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="/buttons/aboborabtn.gif"
                                        alt="a forest cabin with a smoking chimney next to swirling orange autumn leaves"
                                    />
                                </a>
                                <a href="https://myyolo1999.blogspot.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="/buttons/porcupine.png"
                                        alt="text reads: 'blog read', 'personality? no $$$ 4 dat!'"
                                    />
                                </a>
                                <a href="https://whitevhs.xyz" target="_blank" rel="noreferrer">
                                    <img
                                        src="/buttons/whitevhs.gif"
                                        alt="monochrome 2 frame gif which inverts on each frame change. shows a vhs tape."
                                    />
                                </a>
                                <a href="https://risingthumb.xyz" target="_blank" rel="noreferrer">
                                    <img src="/buttons/risingthumb.png" alt="rose petals swept by the wind"/>
                                </a>
                                <a href="https://idelides.xyz" target="_blank" rel="noreferrer">
                                    <img src="/buttons/idelides.png" alt="idelides - the lazy goddess"/>
                                </a>
                            </div>
                            <h2 className="highlighted">lainchan</h2>
                            <div className="friend-container lain">
                                <sub className="lain-text">
                                    i am manually curating and adding to this list, please contact me at{" "}
                                    <a href="mailto:admin@shr4pnel.com">admin@shr4pnel.com</a>&nbsp;or my
                                    mastodon if you'd like to be added. feel free to add my button to your
                                    blog, and the lainchan button onto your blog after sending your button
                                    to the post there on the /tech/ section of the forum.
                                </sub>
                                <sub className="lain-text">
                                    and please feel free to email me. i love hearing from new people and its
                                    nice to not be the one reaching out.
                                </sub>
                                <span className="flex-wrap"></span>
                                <a href="/">
                                    <img
                                        src="/lain/blog.shr4pnel.com.gif"
                                        loading="lazy"
                                        alt="grey background, style of windows 9x button, cat called mauzy next to animated text which reads: blog.shr4pnel.com (disappears) you like blogs dont you?"
                                    />
                                </a>
                                <a href="https://forum.agoraroad.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/agora.gif"
                                        loading="lazy"
                                        alt="animated gif with scrolling fading out text: shhhhh (fade out) the best kept secret"
                                    />
                                </a>
                                <a href="https://articexploit.xyz" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/arcade.gif"
                                        loading="lazy"
                                        alt="animated gif with retropunk text outlined in blue filled with pink spelling: the arcade. background is a flashing arcade with lit up screens"
                                    />
                                </a>
                                <a href="https://lainchan.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/lainchan.org.gif"
                                        loading="lazy"
                                        alt="distorted gif with face of lain iwakura next to the font from the show in the top right reading: lainchan."
                                    />
                                </a>
                                <a href="https://gamajun.neocities.org/webrings/lainring" target="_blank"
                                   rel="noreferrer">
                                    <img
                                        src="/lain/gamajun.png"
                                        loading="lazy"
                                        alt="grey background, pink design and text, glyphs surrounded by floral pattern"
                                    />
                                </a>
                                <a href="https://havinganame.neocities.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/havinganame.png"
                                        loading="lazy"
                                        alt="still image, neon green text on black backdrop. reads: havinganame@neocities"
                                    />
                                </a>
                                <a href="https://cabbagesorter.neocities.org/" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/cabbagesorter.png"
                                        loading="lazy"
                                        alt="still image, monospaced green font on black backdrop. face in anime style to right of image with glow effect applied around it. text is glowing green around the edges"
                                    />
                                </a>
                                <a href="https://foreverliketh.is" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/foreverliketh.is.gif"
                                        loading="lazy"
                                        alt="foreverliketh.is blog banner. green leaves with light blue text in front"
                                    />
                                </a>
                                <a href="https://sizeof.cat" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/sizeofcat.gif"
                                        loading="lazy"
                                        alt="white text on black background with blue cat. animated, cats eyes turn red and it rolls offscreen to the right. text reads: sizeof. cat is on the right of this text"
                                    />
                                </a>
                                <a href="https://varchar.neocities.org/" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/varchar.png"
                                        loading="lazy"
                                        alt="ascii art green terminal stylised text reading: varchar"
                                    />
                                </a>
                                <a href="https://猫.移动/webring/" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/xn-neko.gif"
                                        loading="lazy"
                                        alt="catgirl moving left and right next to 3d japanese characters"
                                    />
                                </a>
                                <a href="https://jahanrashidi.com/explore/" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/smile.png"
                                        width="240"
                                        height="60"
                                        alt="emoticon smiley face on a grey backdrop"
                                    />
                                </a>
                                <a href="https://bass2nick.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/bass2nick.gif"
                                        loading="lazy"
                                        alt="round empty snail-like shell flashing in a circular motion reading: bass2nick.com"
                                    />
                                </a>
                                <a href="https://0x19.org" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/0x19.png"
                                        loading="lazy"
                                        alt="static image written in an old text editor reading: term% 0x19.org. black on white. cyan border"
                                    />
                                </a>
                                <a href="https://gapandfriends.neocities.org/webring" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/gapandfriend.png"
                                        loading="lazy"
                                        alt="red handdrawn bubble writing squared text with thin black outline reading: gap &amp; friend! on a 2 tone blue checkered backdrop"
                                    />
                                </a>
                                <a href="https://navyjoecomics.neocities.org/" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/navyjoecomics.gif"
                                        alt="2 tone blue checkered backdrop. centered text on left half white with dark blue outline in retro font reading: NAVY JOE COMICS. black and white portrait of the mascot is on the right of the text"
                                    />
                                </a>
                                <a href="https://s-config.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/s-config.png"
                                        loading="lazy"
                                        alt="tri tone black and white swirling effect with s-config.com written in cursive font"
                                    />
                                </a>
                                <a href="https://redchanit.xyz/lainring.html" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/redchanit.png"
                                        loading="lazy"
                                        alt="black background with orange flames. red text with black outline saying: redchanit"
                                    />
                                </a>
                                <a href="https://crystal.tilde.institute" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/crystal-tilde.gif"
                                        loading="lazy"
                                        alt="grey border. black backdrop, glowing neon pink text flicking between 2 phrases: crystal.tilde.institute, your brain is tricking you into thinking. image flickers and has RGB noise and CRT scanlines"
                                    />
                                </a>
                                <a href="https://grafo.zone" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/grafo-zone.gif"
                                        loading="lazy"
                                        alt="yellow border, reddish black background. yellow text flickering like electricity flicking between 2 phrases: grafo, .zone"
                                    />
                                </a>
                                <a href="https://risingthumb.xyz" target="_blank" rel="noreferrer">
                                    <img src="/lain/risingthumb.png" alt="rose petals swept in the wind"/>
                                </a>
                                <a href="https://maerk.xyz" target="_blank" rel="noreferrer">
                                    <img
                                        src="/lain/maerk.png"
                                        alt="16bit style blonde character on baby blue background. text reads maerk.xyz"
                                    />
                                </a>
                            </div>
                        </div>
                    </footer>

                </div>
            </main>
        </React.Fragment>
    )
}