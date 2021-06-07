import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    netlifyIdentity.close();
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on('init', (user) => {
      callback(user);
    });
    netlifyIdentity.init({});
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', ({ user_metadata: { full_name } }) => {
      this.user = full_name;
      callback(this.user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
    netlifyIdentity.close();
  },
};

export default netlifyAuth;
