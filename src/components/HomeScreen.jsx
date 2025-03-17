

const HomeScreen = () => {
  return (
    <>
      <div 
        className="p-18 flex text-3xl h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/mahe.jpg')" }}
      >
        <div className='flex '>
        <div className='flex-col justify-between text-[170px]'>
        <h1 className="text-white font-bold">MAHE</h1>
        <h1 className="text-white font-bold">MUN</h1>
         
        </div>
        <img src="/logo.jpg" alt="Logo" className="ml-[200px] h-[200px]" />
        </div>
        <p className='text-right'> Welcome to the MAHE version of the Model United</p>
       
      </div>
      {/* <StackedScroll /> */}
    </>
  );
};

export default HomeScreen;
