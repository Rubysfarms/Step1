window.onload = function () {





    // SERVICES_SECTION





    const webDesign = document.getElementById('web_design');
    const graphicDesign = document.getElementById('graphic_design');
    const onlineSuppport = document.getElementById('online_support');
    const appDesign = document.getElementById('app_design');
    const onlineMarketing = document.getElementById('online_marketing');
    const seoService = document.getElementById('seo_service');

    const triangle1 = document.getElementById('triangle1');
    const triangle2 = document.getElementById('triangle2');
    const triangle3 = document.getElementById('triangle3');
    const triangle4 = document.getElementById('triangle4');
    const triangle5 = document.getElementById('triangle5');
    const triangle6 = document.getElementById('triangle6');
    
    const serviceInfoImg = document.getElementById('service_info_img');
    const serviceInfoText = document.getElementById('service_info_text');

    const webDesignText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum.';
    const graphicDesignText = 'Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve.';
    const onlineSuppportText = 'Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen.';
    const appDesignText = 'Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or. On consider laughter civility offended oh.';
    const onlineMarketingText = 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.';
    const seoServiceText = 'Maids table how learn drift but purse stand yet set. Music me house could among oh as their. Piqued our sister shy nature almost his wicket. Hand dear so we hour to. He we be hastily offence effects he service. Sympathize it projection ye insipidity celebrated my pianoforte indulgence. Point his truth put style. Elegance exercise as laughing proposal mistaken if. We up precaution an it solicitude acceptance invitation.';

    function chooseService(img, text) {
        serviceInfoImg.setAttribute('src', `./img/services/${img}.jpg`);
        serviceInfoText.innerText = text;
    };

    webDesign.onclick = function() {
        chooseService('service1', webDesignText);
    };

    graphicDesign.onclick = function() {
        chooseService('service2', graphicDesignText);
    };

    onlineSuppport.onclick = function() {
        chooseService('service3', onlineSuppportText);
    };

    appDesign.onclick = function() {
        chooseService('service4', appDesignText);
    };

    onlineMarketing.onclick = function() {
        chooseService('service5', onlineMarketingText);
    };
    
    seoService.onclick = function() {
        chooseService('service6', seoServiceText);
    };
    
    webDesign.onmouseover = function() {
        triangle1.style.visibility = 'visible';
    };

    webDesign.onmouseleave = function() {
        triangle1.style.visibility = 'hidden';
    };

    graphicDesign.onmouseover = function() {
        triangle2.style.visibility = 'visible';
    };

    graphicDesign.onmouseleave = function() {
        triangle2.style.visibility = 'hidden';
    };

    onlineSuppport.onmouseover = function() {
        triangle3.style.visibility = 'visible';
    };

    onlineSuppport.onmouseleave = function() {
        triangle3.style.visibility = 'hidden';
    };

    appDesign.onmouseover = function() {
        triangle4.style.visibility = 'visible';
    };

    appDesign.onmouseleave = function() {
        triangle4.style.visibility = 'hidden';
    };

    onlineMarketing.onmouseover = function() {
        triangle5.style.visibility = 'visible';
    };

    onlineMarketing.onmouseleave = function() {
        triangle5.style.visibility = 'hidden';
    };

    seoService.onmouseover = function() {
        triangle6.style.visibility = 'visible';
    };

    seoService.onmouseleave = function() {
        triangle6.style.visibility = 'hidden';
    };





    // AMAZING_WORK_SECTION





    const amazingWorkSection = document.getElementById('amazing_work_section');
    const loadMore = document.getElementById('load_more');
    const ourWorksExtended = document.getElementById('our_works_extended');

    const allButton = document.getElementById('all_filter');
    const graphicFilterButton = document.getElementById('graphic_filter');
    const wordpressFilterButton = document.getElementById('wordpress_filter');
    const webFilterButton = document.getElementById('web_filter');
    const landingFilterButton = document.getElementById('landing_filter');

    const allArray = document.getElementsByClassName('all');
    const graphicFilterArray = document.getElementsByClassName('graphic_design');
    const wordpressFilterArray = document.getElementsByClassName('wordpress');
    const webFilterArray = document.getElementsByClassName('web_design');
    const landingFilterArray = document.getElementsByClassName('landing_page');

    loadMore.onclick = function() {
        ourWorksExtended.style.display='flex';
        loadMore.remove();
    };

    function showAllElements() {
        for(let allImg of allArray) {
            allImg.style.display="inline";
        }
    };

    function showFilteredElements(array) {
        for(let allImg of allArray) {
            allImg.style.display="none";
        }
        for (let img of array) {
            img.style.display="inline";
        };
    };

    allButton.onclick = function() {
        showAllElements();
    };

    graphicFilterButton.onclick = function() {
        showFilteredElements(graphicFilterArray);
    }; 

    wordpressFilterButton.onclick = function() {
        showFilteredElements(wordpressFilterArray);
    }; 

    webFilterButton.onclick = function() {
        showFilteredElements(webFilterArray);
    }; 

    landingFilterButton.onclick = function() {
        showFilteredElements(landingFilterArray);
    }; 
    




    /* COMMENTS_SECTION */





    const commentatorName = document.getElementById('commentator_name');
    const commeentatorJob = document.getElementById('commentator_job');
    const commentatorImgSelected = document.getElementById('commentator_img_selected');
    
    const commentatorLeft = document.getElementById('commentator_left');
    const commentatorRight = document.getElementById('commentator_right');

    const commentator1 = document.getElementById('commentator_1');
    const commentator2 = document.getElementById('commentator_2');
    const commentator3 = document.getElementById('commentator_3');
    const commentator4 = document.getElementById('commentator_4');

    let commentatorNumber = 3;

    commentatorLeft.onclick = function() {
        commentatorNumber -= 1;
        if (commentatorNumber < 1) {
            commentatorNumber = 4;
        } else {};
        chooseCommentator(commentatorNumber);
    };

    commentatorRight.onclick = function() {
        commentatorNumber += 1;
        if (commentatorNumber > 4) {
            commentatorNumber = 1;
        } else {};
        chooseCommentator(commentatorNumber);
    };

    commentator1.onclick = function() {
        commentatorNumber = 1;
        chooseCommentator(commentatorNumber);
    };

    commentator2.onclick = function() {
        commentatorNumber = 2;
        chooseCommentator(commentatorNumber);
    };

    commentator3.onclick = function() {
        commentatorNumber = 3;
        chooseCommentator(commentatorNumber);
    };

    commentator4.onclick = function() {
        commentatorNumber = 4;
        chooseCommentator(commentatorNumber);
    };

    function chooseCommentator(num) {
        if (num === 1) {
            commentatorName.innerText = 'SARAH CONNOR';
            commeentatorJob.innerText = 'Front-end Developer';
            commentatorImgSelected.style.backgroundImage = "url('../img/people/human1.jpg')";
            createBorder(1); 
        } else if (num === 2) {
            commentatorName.innerText = 'BILL MURRAY';
            commeentatorJob.innerText = 'UI Designer';
            commentatorImgSelected.style.backgroundImage = "url('../img/people/human2.jpg')";
            createBorder(2); 
        } else if (num === 3) {
            commentatorName.innerText = 'HASAN ALI';
            commeentatorJob.innerText = 'UX Designer';
            commentatorImgSelected.style.backgroundImage = "url('../img/people/human3.jpg')";
            createBorder(3);
        } else if (num === 4) {
            commentatorName.innerText = 'JESSICA PARKER';
            commeentatorJob.innerText = 'Boss';
            commentatorImgSelected.style.backgroundImage = "url('../img/people/human4.jpg')";
            createBorder(4);
        } else {};
    }

    function createBorder(num) {
        if (num === 1) {
            commentator1.style.border = '2px solid rgb(24, 207, 171)';
            commentator2.style.border = 'none';
            commentator3.style.border = 'none';
            commentator4.style.border = 'none';
            commentator1.style.transform = 'translateY(-20px)';
            commentator2.style.transform = 'translateY(0)';
            commentator3.style.transform = 'translateY(0)';
            commentator4.style.transform = 'translateY(0)';
        } else if (num === 2) {
            commentator1.style.border = 'none';
            commentator2.style.border = '2px solid rgb(24, 207, 171)';
            commentator3.style.border = 'none';
            commentator4.style.border = 'none';
            commentator1.style.transform = 'translateY(0)';
            commentator2.style.transform = 'translateY(-20px)';
            commentator3.style.transform = 'translateY(0)';
            commentator4.style.transform = 'translateY(0)';
        } else if (num === 3) {
            commentator1.style.border = 'none';
            commentator2.style.border = 'none';
            commentator3.style.border = '2px solid rgb(24, 207, 171)';
            commentator4.style.border = 'none';
            commentator1.style.transform = 'translateY(0)';
            commentator2.style.transform = 'translateY(0)';
            commentator3.style.transform = 'translateY(-20px)';
            commentator4.style.transform = 'translateY(0)';
        } else if (num === 4) {
            commentator1.style.border = 'none';
            commentator2.style.border = 'none';
            commentator3.style.border = 'none';
            commentator4.style.border = '2px solid rgb(24, 207, 171)';
            commentator1.style.transform = 'translateY(0)';
            commentator2.style.transform = 'translateY(0)';
            commentator3.style.transform = 'translateY(0)';
            commentator4.style.transform = 'translateY(-20px)';
        } else {}


    };


}








    
    

