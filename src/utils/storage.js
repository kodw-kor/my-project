const saveUserData = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

const loadUserData = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const clearUserData = () => {
  localStorage.clear("user");
};

export { saveUserData, loadUserData, clearUserData };
