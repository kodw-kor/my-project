const saveUserData = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

const loadUserData = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { saveUserData, loadUserData };
