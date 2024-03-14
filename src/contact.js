function contactContent(){
    const mainContainerElement = document.createElement('div');
    mainContainerElement.setAttribute('class', 'main-container');

    const contactInfoElement = document.createElement('div');
    contactInfoElement.setAttribute('class', 'contact-info');
    const contactInfoTitleElement = document.createElement('div');
    contactInfoTitleElement.setAttribute('class','title');
    contactInfoTitleElement.textContent='CONTACT US';
    const pPhoneContactInfoElement = document.createElement('p');
    pPhoneContactInfoElement.textContent = 'Phone numbers: +30 6969696969, +30 4204204200';
    const pEmailContactInfoElement = document.createElement('p');
    const aEmailContactInfoElement = document.createElement('a');
    aEmailContactInfoElement.href='';
    aEmailContactInfoElement.innerHTML=`<span id="email"></span>email: psarotaverna@psarotaverna.com`;
    pEmailContactInfoElement.appendChild(aEmailContactInfoElement);
    contactInfoElement.append(contactInfoTitleElement,pPhoneContactInfoElement,pEmailContactInfoElement);


    const socialsInfoElement = document.createElement('div');
    socialsInfoElement.setAttribute('class','socials-info');
    const socialsInfoTitleElement = document.createElement('div');
    socialsInfoTitleElement.setAttribute('class','title');
    socialsInfoTitleElement.textContent='SOCIALS';
    const pSocialsInfoElement1 = document.createElement('p');
    const aSocialsInfoElement1 = document.createElement('a');
    aSocialsInfoElement1.href='';
    aSocialsInfoElement1.innerHTML=`<span id="Instagram"></span>Instagram: @Psarotaverna`;
    pSocialsInfoElement1.appendChild(aSocialsInfoElement1);
    const pSocialsInfoElement2 = document.createElement('p');
    const aSocialsInfoElement2 = document.createElement('a');
    aSocialsInfoElement2.href='';
    aSocialsInfoElement2.innerHTML=`<span id="Facebook"></span>Facebook: Psarotaverna`;
    pSocialsInfoElement2.appendChild(aSocialsInfoElement2);
    const pSocialsInfoElement3 = document.createElement('p');
    const aSocialsInfoElement3 = document.createElement('a');
    aSocialsInfoElement3.href='';
    aSocialsInfoElement3.innerHTML=`<span id="Twitter"></span>Twitter: @Psarotaverna`;
    pSocialsInfoElement3.appendChild(aSocialsInfoElement3);
    socialsInfoElement.append(socialsInfoTitleElement,pSocialsInfoElement1,pSocialsInfoElement2,pSocialsInfoElement3);



    const recruitmentInfoElement = document.createElement('class','recruitment-info');
    recruitmentInfoElement.setAttribute('class', 'recruitment-info');
    const recruitmentInfoTitleElement = document.createElement('div');
    recruitmentInfoTitleElement.setAttribute('class','title');
    recruitmentInfoTitleElement.textContent='RECRUITMENT';
    const pRecruitmentInfoElement = document.createElement('p');
    pRecruitmentInfoElement.innerHTML = 'Contact us at: <a href="">plsgivemeajob@psarotaverna.com <span id="email"></span></a>';
    recruitmentInfoElement.append(recruitmentInfoTitleElement,pRecruitmentInfoElement)

    mainContainerElement.append(contactInfoElement,socialsInfoElement,recruitmentInfoElement)
    const content = document.querySelector('#content');
    content.appendChild(mainContainerElement);

}

export {contactContent};