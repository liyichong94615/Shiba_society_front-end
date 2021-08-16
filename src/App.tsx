import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import BuccaneerHeader from './components/Home/BuccaneerHeader'
import TopContainer from './components/Home/TopContainer'
import ItemList from './components/Home/ItemList'
import ImageContainer from './components/Home/ImageContainer'
import ImageContainer1 from './components/Home/ImageContainer1'
import ImageContainer2 from './components/Home/ImageContainer2'
import TeamMember from './components/Home/TeamMember'
import MintArea from './components/Home/MintArea'
import Footer from './components/Home/Footer'
import ScreenWrapper from './components/Home/ScreenWrapper'
import styled from 'styled-components'
import { colors } from './styles'

import character1 from './assets/images/character1.png';
import character2 from './assets/images/character2.png';
import shibaAbi from './abi/Shiba.json'
// import shibaContract from './shiba';
import Web3 from 'web3';

const useStyles = makeStyles((theme) => ({
  main: {
    border: '1px solid transparent',
    width: '100%',
  },
}));

const OutlineButton = styled.button`
    padding:0 30px;
    height: 70px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:28px;
    background: #D35BFF;
    @media (max-width: 720px) {
        height: 50px;
        width:80%;
        font-size:20px;
    }
    @media (max-width: 510px) {
        width:80%;
        height: 50px;
        padding:0 10px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const OutlineButton1 = styled.button`
    width: 263px;
    height: 75px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:46px;
    background: #D35BFF;
    margin: 50px 0;
    transition: all 0.2s ease-out;
    @media (max-width: 720px) {
        width: 150px;
        height: 50px;
        font-size:25px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const Title = styled.p`
    color: white;
    font-size: 36px;
    margin-top:60px;
`

let totalprice = 0;

declare global {
  interface Window { ethereum: any; }
  interface Window { web3: any; }
}

const contractAddress = "0x6a08e1D5160E204fC4648B13b9E7b0E05554D7C5";

function App() {
  const classes = useStyles();
  const [contract, setContract] = useState(0);
  const [amount, setAmount] = useState(0);
  const [maxNum, setMaxNum] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [ownEthValue, setOwnEthValue] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [myaccount, setMyaccount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [limitItemNum, setLimitItemNum] = useState(0);
  const [autoNem, setAutoNum] = useState(0);
  const [accountID, setAccountId] = useState("Connect");

  useEffect(() => {

  }, [localStorage.getItem('storeName') == "true"])

  const connectMetaMask = async () => {
    console.log("==============")
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      getInitialValue()
      getAccountId()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      getInitialValue()
      getAccountId()
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  const getMaxValue = async () => {
    setAmount(maxNum)
    totalprice = itemPrice * maxNum
    const etherValue = Web3.utils.fromWei(totalprice.toString(), 'ether');
    setTotalPrice(parseFloat(etherValue))
  }

  const getAccountId = async () => {
    localStorage.setItem('storeName', "true");
    const web3 = window.web3
    console.log("web3", web3.eth)
    // Load account
    const accounts = await web3.eth.getAccounts()
    var id = accounts[0];
    var lastFive = id.substr(id.length - 4); // => "Tabs1"
    var firsttChar = id.slice(0, 6); // => "1"
    var tempID = firsttChar + "..." + lastFive;
    setAccountId(tempID)
    getInitialValue();
  }

  const getInitialValue = async () => {
    const web3 = window.web3
    console.log("web3", web3.eth.net.getId())
    // Network ID
    const networkId = await web3.eth.net.getId()
    if (networkId == 1) {
      const accounts = await web3.eth.getAccounts()
      setMyaccount(accounts[0])
      const ownAmount = await web3.eth.getBalance(accounts[0])
      const amountToEthe = Web3.utils.fromWei(ownAmount.toString(), 'ether');
      setOwnEthValue(parseFloat(amountToEthe));
      const shibaContract = new web3.eth.Contract(shibaAbi, contractAddress);
      const maxNFT = await shibaContract.methods.BUY_LIMIT_PER_TX().call();
      const limitNum = await shibaContract.methods.MAX_NFT().call();
      setLimitItemNum(limitNum)
      const nFTPrice = await shibaContract.methods.NFTPrice().call();
      const totalsupply = await shibaContract.methods.totalSupply().call();
      console.log("totalsupply==", totalsupply)
      console.log("maxNFT===", maxNFT)
      setMaxNum(parseInt(maxNFT))
      setItemPrice(parseFloat(nFTPrice))
      setTotalSupply(totalsupply)
    } else {
      window.alert('Choose Ethereum Network in your Wallet.')
    }
  }

  const changeAmount = (num: number) => {

    if (num == -1) {
      if (amount == 0) {
        setAmount(0)
      } else {
        let totalAmonut = amount + num
        setAmount(totalAmonut)
        totalprice = itemPrice * totalAmonut
        const etherValue = Web3.utils.fromWei(totalprice.toString(), 'ether');
        setTotalPrice(parseFloat(etherValue))
      }
    } else if (num == 1) {
      if (amount == maxNum) {
        setAmount(maxNum)
      } else {
        let totalAmonut: number = amount + num
        setAmount(totalAmonut)
        totalprice = itemPrice * totalAmonut
        const etherValue = Web3.utils.fromWei(totalprice.toString(), 'ether');
        setTotalPrice(parseFloat(etherValue))
      }
    }
  }

  const buyHandler = async () => {
    if (totalPrice == 0) {
      window.alert("Please select item quantity.")
    } else if (ownEthValue < totalPrice) {
      window.alert("You don't have the Ethe you selected.")
    } else {
      const web3 = window.web3
      const shibaContract = new web3.eth.Contract(shibaAbi, contractAddress);
      await shibaContract.methods.mintNFT(amount).send({ from: myaccount, value: Web3.utils.toWei(totalPrice.toString(), "ether") })
      getInitialValue()
      setAmount(0)
      totalprice = 0;
      setTotalPrice(0);
    }
  }
  const updateUI = () => {
    console.log("sdfsdfsdfsd")
    setContract(contract + 1)
  }

  return (
    <ScreenWrapper>
      <BuccaneerHeader connectMetaMask={connectMetaMask} accountID={accountID} />
      <TopContainer />
      <ItemList />
      <ImageContainer />
      <div style={{ alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex', }}>
        <OutlineButton><a href="#footer">Get your unique one-of-a-kind SHIBBY today</a></OutlineButton>
      </div>
      <Title id="loadMap" style={{ width: '90%', textAlign: 'center', marginLeft: '5%' }}>LAUNCH ROADMAP</Title>
      <ImageContainer1 url={20} first={true} last={false} title="$10,000 Shiba Charity Donation" description="Many Shiba Inus died in bombing raids during World War II and it was due to a small number of dog lovers that acted to save their amazing breed from extinction. Here at Shiba Society, we will continue to support their legacy by donating $10,000 to a trusted and transparent Shiba Inu breeder, to commend their efforts in breeding for the community." />
      <ImageContainer1 url={40} first={false} last={false} title="$20,000 Community Grant" description="The NFT space is constantly evolving and we want to support our community members in further experimenting on the possibilities that this New World of NFTs can deliver. A project team will be established to engage with our community members who want to take on projects but have funding constraints. We want to ensure the grant is given to the person or groups of people who are most deserving and are aligned with our core values." />
      <ImageContainer1 url={60} first={false} last={false} title="Limited Release SHIBBYS" description={["Work will commence for the design and release of a small batch of limited release SHIBBYS. We have many in the works, already, but ultimately the themes such as pop culture, memes, sports, etc. will be decided by our ", <a target="_blank" href="https://discord.gg/d9K7FXF4YB">Discord</a>, " community and only owners of a SHIBBY will have a chance at purchasing these limited releases."]} />
      <ImageContainer1 url={80} first={false} last={false} title="2nd Generation SHIBBYS" description="A project team will be established for the design, development and implementation of the 2nd generation SHIBBYS. This will include all the appropriate documentation including a White Paper, breeding instructions etc. We will reward early adopters whilst slowly increasing the number of SHIBBY owners too!" />
      <ImageContainer1 url={100} first={false} last={true} title="$30,000 Successful Launch Giveaway!" description="Launch success! To reward our early adopters, a random selection of 30 SHIBBYS will be airdropped, with $1000 worth of ETH each into their owner's wallets. The more SHIBBYS you own, the higher your chances of winning the giveaway! Now, off to the moon Shiba Society!" />
      <MintArea />
      <ImageContainer2 title="FAIR DROP" description1="No whitelists, no free airdrops, no pricing tiers, even us founders get none." description2="All 1st generation SHIBBYS will be all sold at a price of 0.068 ETH." description3={["All future releases will be voted by our community on our ", <a target="_blank" href="https://discord.gg/d9K7FXF4YB">Discord</a>, " and announced via", <a style={{ color: '#004aad' }} target="_blank" href="https://twitter.com/ShibaSocietyNFT">Twitter.</a>]} />
      <TeamMember url={character1} url1={character2} title="TEAM MEMBERS" />
      <Footer limitItemNum={limitItemNum} ownEthValue={ownEthValue} changeAmount={changeAmount} amount={amount} getMaxValue={getMaxValue} totalPrice={totalPrice} totalSupply={totalSupply} buyHandler={buyHandler} />
    </ScreenWrapper>
  )
}

export default App
