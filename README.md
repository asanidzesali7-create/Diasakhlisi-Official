<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diasakhlisi | დიასახლისი - მონეტიზაცია და თვითრეალიზაცია</title>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Public+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header class="site-header">
        <div class="container">
            <h1 class="logo">Diasakhlisi</h1>
            <nav class="main-nav">
                <ul>
                    <li><a href="#about" class="active">პროექტის შესახებ</a></li>
                    <li><a href="#discover">აღმოაჩინე</a></li>
                    <li><a href="#messages">შეტყობინებები</a></li>
                    <li><a href="#profile"><i class="fa fa-user-circle"></i> პროფილი</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container page-layout">
        
        <div class="feed-column">
            
            <section class="create-idea-panel app-panel">
                <div class="panel-header">
                    <button class="icon-btn"><i class="fa fa-arrow-left"></i></button>
                    <h2>Create Idea</h2>
                </div>
                <div class="idea-upload-mock">
                    <img src="https://via.placeholder.com/350x250/F2EDD5/856852?text=Idea+Media+Preview" alt="Upload Preview">
                    <div class="idea-text">
                        <p class="crimson-text">Share your skills and ideas with others</p>
                        <i class="fa fa-tint drop-icon"></i>
                    </div>
                </div>
                <button class="post-btn">Post</button>
            </section>

            <article class="post-card app-panel">
                <div class="panel-header">
                    <h3>Recent Posts</h3>
                    <img src="https://via.placeholder.com/40/856852/F2EDD5?text=D" alt="DiaHomeisi Avatar" class="mini-avatar">
                </div>
                <div class="card-content">
                    <img src="https://via.placeholder.com/300x200/F2EDD5/856852?text=Baking+apple+pie" alt="Apple Pie Image" class="card-img">
                    <div class="card-footer">
                        <div class="post-info">
                            <h4>Baking apple pie</h4>
                            <p class="author">Emilly</p>
                        </div>
                        <div class="post-stats">
                            <span class="views">6.4K</span>
                            <span class="likes"><i class="fa-regular fa-heart"></i> 6 likes</span>
                        </div>
                    </div>
                </div>
            </article>

            <article class="post-card app-panel">
                <div class="card-content">
                    <img src="https://via.placeholder.com/300x200/F2EDD5/856852?text=Knitting+sweaters" alt="Knitting Image" class="card-img">
                    <div class="card-footer">
                        <div class="post-info">
                            <h4>Knitting sweaters</h4>
                            <p class="author">Sarah</p>
                        </div>
                        <div class="post-stats">
                            <span class="views">3.1K</span>
                            <span class="likes"><i class="fa-regular fa-heart"></i> 31 likes</span>
                        </div>
                    </div>
                </div>
            </article>
            
        </div> <aside class="sidebar-column">
            
            <section class="search-panel app-panel">
                <div class="search-input-wrapper">
                    <i class="fa fa-search search-icon"></i>
                    <input type="text" placeholder="მოძებნე უნარები, სერვისები..." id="skills-search">
                </div>
            </section>
            
            <section id="discover" class="discover-panel app-panel">
                <div class="panel-header">
                    <button class="icon-btn"><i class="fa fa-home"></i></button>
                    <h2>Discover Profiles</h2>
                </div>
                
                <div class="profile-cards-container">
                    </div>
                
                <div class="detail-profile-card">
                    <div class="detail-header">
                        <button class="icon-btn"><i class="fa fa-arrow-left"></i></button>
                        <h2>Profile</h2>
                        <img src="https://via.placeholder.com/40/856852/F2EDD5?text=M" alt="Mary Profile Icon" class="mini-avatar">
                    </div>
                    <div class="detail-content">
                        <img src="https://via.placeholder.com/60/F2EDD5/856852?text=M" alt="Mary Avatar" class="main-avatar">
                        <div class="main-details">
                            <h3>Mary</h3>
                            <p class="bio">Cooking and making crafts</p>
                        </div>
                        
                        <div class="user-ideas-section">
                            <h4>Your Ideas</h4>
                            <div class="idea-thumbnails">
                                <div class="thumb-item"><img src="https://via.placeholder.com/80/F2EDD5/856852?text=Salads" alt="Salad thumbnail"> Preparing salads</div>
                                <div class="thumb-item"><img src="https://via.placeholder.com/80/F2EDD5/856852?text=Candles" alt="Candle thumbnail"> Handmade candles</div>
                            </div>
                        </div>
                        
                        <div class="user-messages-section">
                            <h4>Messages</h4>
                            <button class="messages-btn">Messages</button>
                        </div>
                    </div>
                </div>
                
            </section>

            <section id="messages" class="chat-panel app-panel">
                <div class="panel-header">
                    <button class="icon-btn"><i class="fa fa-comment-dots"></i></button>
                    <h2>Chat</h2>
                </div>
                <div class="chat-container">
                    <div class="user-strip">
                        <img src="https://via.placeholder.com/50/856852/F2EDD5?text=E" alt="Eleanor Avatar" class="main-avatar">
                        <div class="chat-user-info">
                            <h3>Eleanor</h3>
                            <p class="chat-tag">Cooking and...</p>
                        </div>
                    </div>
                    <div class="messages-stream">
                        <div class="bubble incoming">Hello! I'd like to order a cake for an event.</div>
                        <div class="bubble outgoing">Sure, I'd be happy to help!</div>
                    </div>
                </div>
            </section>

        </aside>

    </main>
    
    <nav class="bottom-nav">
        <ul>
            <li><a href="#feed"><i class="fa fa-home"></i></a></li>
            <li><a href="#messages"><i class="fa fa-comment"></i></a></li>
            <li><a href="#post"><i class="fa fa-plus-circle"></i></a></li>
            <li><a href="#profile"><i class="fa fa-user"></i></a></li>
        </ul>
    </nav>

    <footer id="about" class="site-info">
        <div class="container crimson-text">
            <h2>პროექტის სახელწოდება: Diasakhlisi</h2>
            <h3>პროექტის იდეა</h3>
            <p>Diasakhlisi არის ციფრული პლატფორმა, რომელიც ეხმარება სახლში მყოფ ადამიანებს (და არა მხოლოდ მათ) საკუთარი უნარების, ხელსაქმის, კულინარიის, სერვისებისა და შექმნილი პროდუქტების მონეტიზებაში...</p>
            <h3>მისია</h3>
            <p>Diasakhlisi-ის მისიაა ადამიანებს მისცეს შესაძლებლობა, საკუთარი ყოველდღიური უნარები გადააქციონ რეალურ ეკონომიკურ ძალად.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
