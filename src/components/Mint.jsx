import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Mint() {
  const netID = 0x4; //rinkeby
  // const netID = 0x1 // mainnet
  const [num, setNum] = useState(1);
  const [error, setError] = useState("");

  const [walletAddress, setWalletAddress] = useState("");
  const [connectStatus, setConnectStatus] = useState(false);
  const [correctNet, setCorrectNet] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const handleChange = (e) => {
    setNum(e.target.value);
    if (num > 2) {
      setError("Max of 2 is allowed");
      setNum(1);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("Please install Metamask!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await ethereum.request({ method: "eth_chainId" });

      setWalletAddress(accounts[0]);
      setConnectStatus(true);
      setCorrectNet(chainId == netID);

      toast.success("Wallet Connected Successfully!");

      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", async (chainId) => {
        setCorrectNet(chainId == netID);
      });
    } catch (e) {
      console.error(e);
      toast.error("User denied wallet connection!");
    }
  };

  const switchNetwork = async () => {
    try {

    } catch (e) {
        
    }
  }

  useEffect(() => {
    // connectWallet();
  }, [walletAddress, correctNet]);

  return (
    <div className="bg-mint  bg-cover bg-no-repeat md:mb-24 my-12 md:mt-36 bg-bottom py-[3%] md:bg-mint_Web">
      <div
        id="mint"
        className="md:max-w-[1920px] w-[85%] flex md:flex-row flex-col bg-white rounded-3xl shadow-xl  mx-auto w-full h-[450px] md:h-[90%] md:-mt-20 md:mb-20 "
      >
        <div className="md:w-[35%] w-full h-[40%] md:p-0 p-2 md:h-full">
          <img
            src="/img/mint.jpeg"
            className="w-full  h-full rounded-3xl object-cover  "
          />
        </div>
        <div className="md:w-[70%] h-full w-full flex flex-col py-4 md:py-6 justify-center items-center">
          <h1 className="text-xl md:text-2xl text-[#415DA7] font-semibold mb-1 font-irish">
            Public Sale is Life
          </h1>
          <span className="text-base font-irish text-[#415DA7] mb-1 text-center">
            {/* {walletAddress ? (
              <>
                your wallet <br /> {walletAddress}
              </>
            ) : (
              <> */}
                please <br /> connect wallet to mint
              {/* </>
            )} */}
          </span>
          <div className="md:w-[70%]  mb-2 w-[90%] flex  mx-auto mt-2 md:my-1">
            <div className="md:w-[70%] w-[60%] bg-[#B0C8EF] rounded-l-xl py-2 flex flex-col  pl-4">
              <input
                type="number"
                value={num}
                min={1}
                max={2}
                step={0.1}
                onChange={handleChange}
                className="border-none text-sm focus:ring-2 w-[80%] focus:border-none rounded-2xl px-2 "
              />
              {/* <span className="text-sm text-red-500">{error && error}</span> */}
            </div>
            <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-2 flex rounded-r-xl justify-center items-center">
              <span className="text-white font-semibold font-irish">
                {num * 0.01} Eth
              </span>
            </div>
          </div>
          <div className="md:w-[69%] w-[90%] mx-auto flex items-center justify-between">
            <span className="md:text-base text-sm font-irish text-[#415DA7] uppercase">
              Bunnies Balance: 0
            </span>
            <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-1 flex  justify-center items-center">
              <span className="text-white text-sm text-[#B3CBF1] font-irish">
                Max Mint 2
              </span>
            </div>
          </div>
          <div className="max-w-[70%] w-full flex items-center mx-auto">
            {/* {connectStatus && !correctNet && (
              <button className="bg-button bg-center py-2 shadow-xl bg-cover w-full text-white uppercase text-xl font-irish border-none rounded-3xl mt-6" onClick={switchNetwork}>
                Switch Network
              </button>
            )}

            {correctNet && (
              <button className="bg-button bg-center py-2 shadow-xl bg-cover w-full text-white uppercase text-xl font-irish border-none rounded-3xl mt-6">
                Mint
              </button>
            )} */}
            {/* {!connectStatus && ( */}
              <button className="bg-button bg-center py-2 shadow-xl bg-cover w-full text-white uppercase text-xl font-irish border-none rounded-3xl mt-6" onClick={connectWallet}>
                Connect Wallet
              </button>
            {/* // )} */}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Mint;
