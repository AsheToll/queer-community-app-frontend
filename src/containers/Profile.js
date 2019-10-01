import React from 'react'
import Navbar from '../components/Navbar.js'

const Profile = props => {
    return(
        <div>
            <Navbar />
            <section className = 'hero is-primary is-small banner'>
                <div className = 'hero-body container image-hero-body'>
                    <img className = 'circular' src = {'https://gamingballistic.com/wp-content/uploads/2015/09/wizard_by_gerezon-d5d1i0h-1.jpg'}/>
                </div>
            </section>
            <section className = 'hero is-medium'>
                <div className = 'hero-body profile-hero-body'>
                    <div className = 'container profile-hero-body-text'>
                        <h1 className = 'title profile-title'>Ashley Tolen</h1>
                        <h3 className = 'is-size-6'><span className = 'city-text'>Washington, DC</span></h3>
                        <br />
                        <p className = 'is-size-6'>Weigh eight pounds but take up a full-size bed have my breakfast spaghetti yarn groom forever, <br /> stretch tongue and leave it slightly out, blep. I like cats because they are fat and fluffy.</p>
                    </div>
                <hr />
                {/* <!-- Main container --> */}
<nav className="level">
  {/* <!-- Left side --> */}
  <div className = 'level-left'>
    <div className="level-item has-text-centered">
        <div>
        <p className="title">22</p>
        <p className="heading">Attended Events</p>
        </div>
    </div>
    <div className="level-item has-text-centered">
        <div>
        <p className="title">14</p>
        <p className="heading">Created Events</p>
        </div>
    </div>
  </div>

  {/* <!-- Right side --> */}
  <div className="level-right buttons">
    <button className = 'button profile-friend-button'>
        Friend
    </button>
    <button className = 'button profile-chat-button'>
        Chat
    </button>
  </div>
</nav>
                </div>
            </section>
            <div className = 'container profile-events-container'>
                Events I'm Interested In
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Tweets</p>
                        <p class="title">3,456</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Following</p>
                        <p class="title">123</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Followers</p>
                        <p class="title">456K</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Likes</p>
                        <p class="title">789</p>
                        </div>
                    </div>
                    </nav>
                Events I've Hosted
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Tweets</p>
                        <p class="title">3,456</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Following</p>
                        <p class="title">123</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Followers</p>
                        <p class="title">456K</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Likes</p>
                        <p class="title">789</p>
                        </div>
                    </div>
                    </nav>
                Events I've Attended
                <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Tweets</p>
                    <p class="title">3,456</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Following</p>
                    <p class="title">123</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Followers</p>
                    <p class="title">456K</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Likes</p>
                    <p class="title">789</p>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Profile