let divdata=[
    {
        cflag:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png',
        cname:'India',
        cflag1:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png',
        cname1:'SA'
    },
    {
        cflag:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png',
        cname:'SriLanka',
        cflag1:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png',
        cname1:'AUS'
    }
]

let whitediv=document.querySelector('#whitediv')
addtoWhite();
function addtoWhite(event){
    // event.preventDefault();
    divdata.forEach(function(ele){
        let innerDiv=document.createElement('div')

        let countryImage=document.createElement('img')
        countryImage.setAttribute('src',ele.cflag)

       let countryName=document.createElement('p')
        countryName.innerText=ele.cname

        let countryImage1=document.createElement('img')
        countryImage.setAttribute('src',ele.cflag1)

        let countryName1=document.createElement('p')
        countryName.innerText=ele.cname1
        
        innerDiv.append(countryImage,countryName,countryImage1.countryName1)
        whitediv.append(innerDiv)
    })
}