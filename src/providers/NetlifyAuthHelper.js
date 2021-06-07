import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on('init', ({ user_metadata: { full_name } }) => {
      callback(full_name);
    });
    netlifyIdentity.init();
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', ({ user_metadata: { full_name } }) => {
      this.user = full_name;
      callback(this.user);
      netlifyIdentity.close();
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  },
};

export default netlifyAuth;
