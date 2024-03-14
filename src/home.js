function homeContent(){
    const mainContainerElement = document.createElement('div');
    mainContainerElement.setAttribute('class','main-container');
    


    const descriptionTitleElement = document.createElement('div');
    descriptionTitleElement.setAttribute('class','title');
    descriptionTitleElement.textContent='PSAROTAVERNA';

    const scheduleTitleElement = document.createElement('div');
    scheduleTitleElement.setAttribute('class','title');
    scheduleTitleElement.textContent='HOURS';


    const locationTitleElement = document.createElement('div');
    locationTitleElement.setAttribute('class','title');
    locationTitleElement.textContent='LOCATION';


    const pDescriptionElement = document.createElement('p');
    const descriptionElement = document.createElement('div');
    descriptionElement.setAttribute('class','description');
    pDescriptionElement.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dignissimos unde? Eaque laborum totam sint magni delectus ipsum iure cupiditate ipsam quidem qui, obcaecati et laboriosam, quibusdam, quod aliquam quas?';
    
    const scheduleElement = document.createElement('div');
    scheduleElement.setAttribute('class','schedule');
    scheduleElement.appendChild(scheduleTitleElement);
    createSchedule(scheduleElement);

    
    const pLocationElement = document.createElement('p');
    pLocationElement.textContent = 'Ths manas sou to mouni.'
    const locationElement = document.createElement('div');
    locationElement.setAttribute('class','location')
    locationElement.append(locationTitleElement,pLocationElement);

    descriptionElement.append(descriptionTitleElement,pDescriptionElement);
    mainContainerElement.append(descriptionElement,scheduleElement,locationElement);
    content = document.querySelector('#content');
    content.appendChild(mainContainerElement);
    
}

function createSchedule(father) {
    const Days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    for (let i=0; i<6;i++){
        let pElement = document.createElement('p');
        pElement.textContent=`${Days[i]} : 12:00pm until 1:00am`;
        father.appendChild(pElement);
    }
    let pElement = document.createElement('p');
    pElement.textContent=`${Days[6]} : Closed`;
    father.appendChild(pElement);
}

export {homeContent};