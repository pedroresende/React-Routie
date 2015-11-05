var ActiveMenu = React.createClass({
    render: function () {
        return (
            <ul className="nav navbar-nav">
                <li className={this.props.active == "home" ? 'active' : ''}><a href="#">Home</a></li>
                <li className={this.props.active == "about" ? 'active' : ''}><a href="#about">About</a></li>
                <li className={this.props.active == "contact" ? 'active' : ''}><a href="#contact">Contact</a></li>
            </ul>
        )
    }
});

var Menu = React.createClass({
    render: function () {
        return (
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                      </div>
                      <div id="navbar" className="collapse navbar-collapse">
                        <ActiveMenu active={this.props.active}/>
                      </div>
                    </div>
                </nav>
        );
    }
});

var AboutContent = React.createClass({
   render: function () {
       return (
        <div className="container">
            <div className="starter-template">
              <h1>About< /h1>
              <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
            </div>
        </div>
        );
   } 
});

var AboutPage = React.createClass({
   render: function () {
       return (
            <div>
            <Menu active="about"/>
            <AboutContent />
            </div>
        );
   } 
});

var ContactContent = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();
        var file = this.refs.file.value.trim();
        var checkbox = this.refs.checkbox.value.trim();
        if (!email || !password) {
            return;
        }
        console.log("Email " + email + " Password " + password);
        this.refs.email.value = '';
        this.refs.password.value = '';
    },
    render: function () {
        return (
            <div className="container">
                <div className="starter-template">
                    <h1>Contact< /h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" ref="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" ref="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile" ref="file"/>
                            <p className="help-block">Example block-level help text here.</p>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" ref="checkbox"/> Check me out
                            </label>
                        </div>
                       <button type="submit" className="btn btn-default">Submit</button>
                     </form>
                </div>
            </div>
        );
    } 
});

var ContactPage = React.createClass({
   render: function () {
       return (
            <div>
            <Menu active="contact"/>
            <ContactContent />
            </div>
        );
   } 
});

routie({
    '': function() {
        // render the home page on a direct access
        ReactDOM.render(
                <Menu active="home"/>,
                document.getElementById('container')
        );
    },
    'about': function() {
        // render the about page on a direct access
        ReactDOM.render(
                <AboutPage />,
                document.getElementById('container')
        );
    },
    'contact': function() {
        // render the contact page on a direct access
        ReactDOM.render(
                <ContactPage />,
                document.getElementById('container')
        );        
    }
});