

const PaymentSuccessSSL = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h2>
        <p className="mt-4 text-lg text-gray-700">
          Thank you for your payment. Your transaction was successful.
        </p>
      
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccessSSL;
