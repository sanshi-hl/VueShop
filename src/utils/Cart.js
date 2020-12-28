export default {
  addCart(cart) {
    const username = localStorage.getItem('user');
    localStorage.setItem(`cart${username}`, JSON.stringify(cart));
  },
  getCart() {
    const username = localStorage.getItem('user');
    const s = localStorage.getItem(`cart${username}`);
    if (s !== null && s !== undefined && s !== 'null' && s !== '') {
      return JSON.parse(s);
    } else {
      return [];
    }
  },
  getOrder() {
    const username = localStorage.getItem('user');
    return JSON.parse(localStorage.getItem(`order${username}`));
  },
  setOrder(items) {
    const username = localStorage.getItem('user');
    localStorage.setItem(`order${username}`, JSON.stringify(items));
  },
};
