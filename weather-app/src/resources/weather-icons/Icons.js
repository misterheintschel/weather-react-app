const REACT_APP_IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
const icons = [
  {
    key:'sun',
    value:REACT_APP_IMAGE_URL+'sun.gif'
  },
  {
    key:'moon',
    value:REACT_APP_IMAGE_URL+'moon.gif'
  },
  {
    key:'thermoRed',
    value:REACT_APP_IMAGE_URL+'thermo-red.png'
  },
  {
    key:'thermoBlue',
    value:REACT_APP_IMAGE_URL+'thermo-blue.png'
  },
  {
    key:'sunrise',
    value:REACT_APP_IMAGE_URL+'yellowsun.gif'
  },
  {
    key:'sunset',
    value:REACT_APP_IMAGE_URL+'redsun.gif'
  },
  {
    key:'200d',
    value:REACT_APP_IMAGE_URL+'200d.gif'
  },
  {
    key:'200n',
    value:REACT_APP_IMAGE_URL+'200n.gif'
  },
  {
    key:'201d',
    value:REACT_APP_IMAGE_URL+'201d.gif'
  },
  {
    key:'201n',
    value:REACT_APP_IMAGE_URL+'201n.gif'
  },
  {
    key:'202d',
    value:REACT_APP_IMAGE_URL+'202d.gif'
  },
  {
    key:'202n',
    value:REACT_APP_IMAGE_URL+'202n.gif'
  },
  {
    key:'210d',
    value:REACT_APP_IMAGE_URL+'210d.gif'
  },
  {
    key:'210n',
    value:REACT_APP_IMAGE_URL+'210n.gif'
  },
  {
    key:'211d',
    value:REACT_APP_IMAGE_URL+'211d.gif'
  },
  {
    key:'211n',
    value:REACT_APP_IMAGE_URL+'211n.gif'
  },
  {
    key:'212d',
    value:REACT_APP_IMAGE_URL+'212d.gif'
  },
  {
    key:'212n',
    value:REACT_APP_IMAGE_URL+'212n.gif'
  },
  {
    key:'221d',
    value:REACT_APP_IMAGE_URL+'221d.gif'
  },
  {
    key:'221n',
    value:REACT_APP_IMAGE_URL+'221n.gif'
  },
  {
    key:'230d',
    value:REACT_APP_IMAGE_URL+'230d.gif'
  },
  {
    key:'230n',
    value:REACT_APP_IMAGE_URL+'230n.gif'
  },
  {
    key:'231d',
    value:REACT_APP_IMAGE_URL+'231d.gif'
  },
  {
    key:'231n',
    value:REACT_APP_IMAGE_URL+'231n.gif'
  },
  {
    key:'232d',
    value:REACT_APP_IMAGE_URL+'232d.gif'
  },
  {
    key:'232n',
    value:REACT_APP_IMAGE_URL+'232n.gif'
  },
  {
    key:'300d',
    value:REACT_APP_IMAGE_URL+'300d.gif'
  },
  {
    key:'300n',
    value:REACT_APP_IMAGE_URL+'300n.gif'
  },
  {
    key:'301d',
    value:REACT_APP_IMAGE_URL+'301d.gif'
  },
  {
    key:'301n',
    value:REACT_APP_IMAGE_URL+'301n.gif'
  },
  {
    key:'302d',
    value:REACT_APP_IMAGE_URL+'302d.gif'
  },
  {
    key:'302n',
    value:REACT_APP_IMAGE_URL+'302n.gif'
  },
  {
    key:'310d',
    value:REACT_APP_IMAGE_URL+'310d.gif'
  },
  {
    key:'310n',
    value:REACT_APP_IMAGE_URL+'310n.gif'
  },
  {
    key:'311d',
    value:REACT_APP_IMAGE_URL+'311d.gif'
  },
  {
    key:'311n',
    value:REACT_APP_IMAGE_URL+'311n.gif'
  },
  {
    key:'312d',
    value:REACT_APP_IMAGE_URL+'312d.gif'
  },
  {
    key:'312n',
    value:REACT_APP_IMAGE_URL+'312n.gif'
  },
  {
    key:'313d',
    value:REACT_APP_IMAGE_URL+'313d.gif'
  },
  {
    key:'313n',
    value:REACT_APP_IMAGE_URL+'313n.gif'
  },
  {
    key:'314d',
    value:REACT_APP_IMAGE_URL+'314d.gif'
  },
  {
    key:'314n',
    value:REACT_APP_IMAGE_URL+'314n.gif'
  },
  {
    key:'321d',
    value:REACT_APP_IMAGE_URL+'321d.gif'
  },
  {
    key:'321n',
    value:REACT_APP_IMAGE_URL+'321n.gif'
  },
  {
    key:'500d',
    value:REACT_APP_IMAGE_URL+'500d.gif'
  },
  {
    key:'500n',
    value:REACT_APP_IMAGE_URL+'500n.gif'
  },
  {
    key:'501d',
    value:REACT_APP_IMAGE_URL+'501d.gif'
  },
  {
    key:'501n',
    value:REACT_APP_IMAGE_URL+'501n.gif'
  },
  {
    key:'502d',
    value:REACT_APP_IMAGE_URL+'502d.gif'
  },
  {
    key:'502n',
    value:REACT_APP_IMAGE_URL+'502n.gif'
  },
  {
    key:'503d',
    value:REACT_APP_IMAGE_URL+'503d.gif'
  },
  {
    key:'503n',
    value:REACT_APP_IMAGE_URL+'503n.gif'
  },
  {
    key:'504d',
    value:REACT_APP_IMAGE_URL+'504d.gif'
  },
  {
    key:'504n',
    value:REACT_APP_IMAGE_URL+'504n.gif'
  },
  {
    key:'511d',
    value:REACT_APP_IMAGE_URL+'511d.gif'
  },
  {
    key:'511n',
    value:REACT_APP_IMAGE_URL+'511n.gif'
  },
  {
    key:'520d',
    value:REACT_APP_IMAGE_URL+'520d.gif'
  },
  {
    key:'520n',
    value:REACT_APP_IMAGE_URL+'520n.gif'
  },
  {
    key:'521d',
    value:REACT_APP_IMAGE_URL+'521d.gif'
  },
  {
    key:'521n',
    value:REACT_APP_IMAGE_URL+'521n.gif'
  },
  {
    key:'522d',
    value:REACT_APP_IMAGE_URL+'522d.gif'
  },
  {
    key:'522n',
    value:REACT_APP_IMAGE_URL+'522n.gif'
  },
  {
    key:'531d',
    value:REACT_APP_IMAGE_URL+'531d.gif'
  },
  {
    key:'531n',
    value:REACT_APP_IMAGE_URL+'531n.gif'
  },
  {
    key:'600d',
    value:REACT_APP_IMAGE_URL+'600d.gif'
  },
  {
    key:'600n',
    value:REACT_APP_IMAGE_URL+'600n.gif'
  },
  {
    key:'601d',
    value:REACT_APP_IMAGE_URL+'601d.gif'
  },
  {
    key:'601n',
    value:REACT_APP_IMAGE_URL+'601n.gif'
  },
  {
    key:'602d',
    value:REACT_APP_IMAGE_URL+'602d.gif'
  },
  {
    key:'602n',
    value:REACT_APP_IMAGE_URL+'602n.gif'
  },
  {
    key:'611d',
    value:REACT_APP_IMAGE_URL+'611d.gif'
  },
  {
    key:'611n',
    value:REACT_APP_IMAGE_URL+'611n.gif'
  },
  {
    key:'612d',
    value:REACT_APP_IMAGE_URL+'612d.gif'
  },
  {
    key:'612n',
    value:REACT_APP_IMAGE_URL+'612n.gif'
  },
  {
    key:'613d',
    value:REACT_APP_IMAGE_URL+'613d.gif'
  },
  {
    key:'613n',
    value:REACT_APP_IMAGE_URL+'613n.gif'
  },
  {
    key:'615d',
    value:REACT_APP_IMAGE_URL+'615d.gif'
  },
  {
    key:'615n',
    value:REACT_APP_IMAGE_URL+'615n.gif'
  },
  {
    key:'616d',
    value:REACT_APP_IMAGE_URL+'616d.gif'
  },
  {
    key:'616n',
    value:REACT_APP_IMAGE_URL+'616n.gif'
  },
  {
    key:'620d',
    value:REACT_APP_IMAGE_URL+'620d.gif'
  },
  {
    key:'620n',
    value:REACT_APP_IMAGE_URL+'620n.gif'
  },
  {
    key:'621d',
    value:REACT_APP_IMAGE_URL+'621d.gif'
  },
  {
    key:'621n',
    value:REACT_APP_IMAGE_URL+'621n.gif'
  },
  {
    key:'622d',
    value:REACT_APP_IMAGE_URL+'622d.gif'
  },
  {
    key:'622n',
    value:REACT_APP_IMAGE_URL+'622n.gif'
  },
  {
    key:'701d',
    value:REACT_APP_IMAGE_URL+'701d.gif'
  },
  {
    key:'701n',
    value:REACT_APP_IMAGE_URL+'701n.gif'
  },
  {
    key:'711d',
    value:REACT_APP_IMAGE_URL+'711d.gif'
  },
  {
    key:'711n',
    value:REACT_APP_IMAGE_URL+'711n.gif'
  },
  {
    key:'721d',
    value:REACT_APP_IMAGE_URL+'721d.gif'
  },
  {
    key:'721n',
    value:REACT_APP_IMAGE_URL+'721n.gif'
  },
  {
    key:'731d',
    value:REACT_APP_IMAGE_URL+'731d.gif'
  },
  {
    key:'731n',
    value:REACT_APP_IMAGE_URL+'731n.gif'
  },
  {
    key:'741d',
    value:REACT_APP_IMAGE_URL+'741d.gif'
  },
  {
    key:'741n',
    value:REACT_APP_IMAGE_URL+'741n.gif'
  },
  {
    key:'751d',
    value:REACT_APP_IMAGE_URL+'751d.gif'
  },
  {
    key:'751n.gif',
    value:REACT_APP_IMAGE_URL+'751n.gif'
  },
  {
    key:'761d',
    value:REACT_APP_IMAGE_URL+'761d.gif'
  },
  {
    key:'761n',
    value:REACT_APP_IMAGE_URL+'761n.gif'
  },
  {
    key:'762d',
    value:REACT_APP_IMAGE_URL+'762d.gif'
  },
  {
    key:'762n',
    value:REACT_APP_IMAGE_URL+'762n.gif'
  },
  {
    key:'771d',
    value:REACT_APP_IMAGE_URL+'771d.gif'
  },
  {
    key:'771n',
    value:REACT_APP_IMAGE_URL+'771n.gif'
  },
  {
    key:'781d',
    value:REACT_APP_IMAGE_URL+'781d.gif'
  },
  {
    key:'781n',
    value:REACT_APP_IMAGE_URL+'781n.gif'
  },
  {
    key:'800d',
    value:REACT_APP_IMAGE_URL+'800d.gif'
  },
  {
    key:'800n',
    value:REACT_APP_IMAGE_URL+'800n.gif'
  },
  {
    key:'801d',
    value:REACT_APP_IMAGE_URL+'801d.gif'
  },
  {
    key:'801n',
    value:REACT_APP_IMAGE_URL+'801n.gif'
  },
  {
    key:'802d',
    value:REACT_APP_IMAGE_URL+'802d.gif'
  },
  {
    key:'802n',
    value:REACT_APP_IMAGE_URL+'802n.gif'
  },
  {
    key:'803d',
    value:REACT_APP_IMAGE_URL+'803d.gif'
  },
  {
    key:'803n',
    value:REACT_APP_IMAGE_URL+'803n.gif'
  },
  {
    key:'804d',
    value:REACT_APP_IMAGE_URL+'804d.gif'
  },
  {
    key:'804n',
    value:REACT_APP_IMAGE_URL+'804n.gif'
  }
]


export default icons;
