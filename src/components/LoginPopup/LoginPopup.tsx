function LoginPopup({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <h2>Login</h2>
    </div>
  );
}

export default LoginPopup;
