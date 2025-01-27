const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-800">
      <h1 className="text-4xl font-bold mb-4">Payment Successful! 🎉</h1>
      <p className="text-lg mb-6">
        Thank you for your purchase. Your transaction was completed
        successfully.
      </p>
      <a
        href="/dashboard"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        Go to Dashboard
      </a>
    </div>
  );
};

export default Success;
