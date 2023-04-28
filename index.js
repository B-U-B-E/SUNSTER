let audioIn = new Audio("./audio/bam3.wav");
        let audioOut = new Audio("./audio/outBube.wav")
        let menu = document.querySelector('.menu');
        let openTheButton = document.querySelector(".icon-open");
        let closeTheButton = document.querySelector(".icon-close");



        function menuScroll(bubeScroll) {
            if (bubeScroll.matches) {
                document.body.style.overflow = "auto";


            }


        }

        let bubeScroll = window.matchMedia("(min-width: 1024px)");
        menuScroll(bubeScroll);
        bubeScroll.addListener(menuScroll);






        openTheButton.addEventListener("click", function getclickOpen() {
            document.body.style.overflow = "hidden";
            audioIn.play()

            menu.classList.add('open')
        })
        closeTheButton.addEventListener("click", getclickClose);



        function getclickClose() {
            document.body.style.overflow = "auto";
            audioOut.play()
            menu.classList.remove('open');




        }
        // BANNER
        let hero = document.getElementById("hero");
        hero.setAttribute("style", "display:flex; justify-content:center; align-items:center;");

        let h1 = document.createElement("h1");
        h1.innerText = "Sunster Labs";
        h1.setAttribute("style", "text-transform:capitalize; color:white; text-shadow:0 0 10px black");
        hero.append(h1);

        function bubeBanner(bube) {
            if (bube.matches) {
                h1.style.fontSize = "30px";
                hero.style.backgroundAttachment = "scroll";


            } else {
                h1.style.fontSize = "60px";
                hero.style.backgroundAttachment = "fixed";
            }
        }

        let bube = window.matchMedia("(max-width: 433px)");
        bubeBanner(bube);
        bube.addListener(bubeBanner);


        // PROJECT
        let projects = document.querySelector('.projects');
        let icon1 = document.querySelector(".check1")
        let icon2 = document.querySelector(".check2")
        let icon3 = document.querySelector(".check3")

        let firstElProject = projects.children[0];
        let secondElProject = projects.children[1];
        let thirdElProject = projects.children[2];

        let allCards = document.querySelectorAll('.card');

        function clearAllCards() {
            for (i = 0; i < allCards.length; i++) {
                allCards[i].style.display = "none";
            }
        }
        console.log(allCards)

        let marketingCards = document.querySelectorAll('.card-marketing');

        function getClickedFirst() {
            firstElProject.classList.add('check')

            if (firstElProject) {
                icon1.style.display = "block";
                icon2.style.display = "none";
                secondElProject.classList.remove('check')
                icon3.style.display = "none";
                thirdElProject.classList.remove('check');

                let linkForAntentionMarketing = document.querySelector('a[href^="#marketing"]');
                linkForAntentionMarketing.setAttribute('style',
                    "background-color: #ff1300; color:white; transition:all  1s ease-in-out; padding:10px 2px; border-radius:5px; "
                );

                let linkForAntentionProgramming = document.querySelector('a[href^="#programming"]');
                linkForAntentionProgramming.setAttribute("style",
                    "text-decoration:line-through; opacity:0.5; transition: all 1s ease-in-out; cursor: not-allowed;"
                );

                let linkForAntentionDesign = document.querySelector('a[href^="#design"]');
                linkForAntentionDesign.setAttribute("style",
                    "text-decoration:line-through; opacity:0.5; transition: all 1s ease-in-out; cursor: not-allowed;"
                );



                clearAllCards()

                if (firstElProject.classList[1] === "check") {

                    marketingCards.forEach(marketingCard => {
                        marketingCard.style.display = "block";


                    })
                    programmingCards.forEach(programmingCard => {
                        programmingCard.style.display = "none"
                    })

                    designCards.forEach(designCard => {
                        designCard.style.display = "none"
                    })

                }
            }

        }

        console.log(firstElProject.attributes[0].nodeValue === "project-content check")

        firstElProject.addEventListener("click", getClickedFirst);

        let programmingCards = document.querySelectorAll(".card-programming");

        function getClickedSecond() {
            secondElProject.classList.add('check')
            if (secondElProject) {
                icon2.style.display = "block";
                icon1.style.display = "none";
                firstElProject.classList.remove('check')
                icon3.style.display = "none";
                thirdElProject.classList.remove('check');


                let linkForAntentionMarketing = document.querySelector('a[href^="#programming"]');
                linkForAntentionMarketing.setAttribute('style',
                    "background-color: #ff1300; color:white; transition:all 1s ease-in-out; padding:10px 2px; border-radius:5px; "
                );

                let linkForAntentionProgramming = document.querySelector('a[href^="#marketing"]');
                linkForAntentionProgramming.setAttribute("style",
                    "text-decoration:line-through; opacity:0.5; transition: all 1s ease-in-out; cursor: not-allowed;"
                );

                let linkForAntentionDesign = document.querySelector('a[href^="#design"]');
                linkForAntentionDesign.setAttribute("style",
                    "text-decoration:line-through; opacity:0.5; transition: all 1s ease-in-out; cursor: not-allowed;"
                );

                clearAllCards();


                if (secondElProject.classList[1] === "check") {
                    programmingCards.forEach(programmingCard => {
                        programmingCard.style.display = "block";
                    })
                    marketingCards.forEach(marketingCard => {
                        marketingCard.style.display = "none";
                    })
                    designCards.forEach(designCard => {
                        designCard.style.display = "none"
                    })

                }

            }

        }
        secondElProject.addEventListener("click", getClickedSecond);

        let designCards = document.querySelectorAll(".card-design");

        function getClickedThird() {
            thirdElProject.classList.add('check')
            if (thirdElProject) {
                icon3.style.display = "block";
                icon2.style.display = "none";
                secondElProject.classList.remove('check')
                icon1.style.display = "none";
                firstElProject.classList.remove('check');

                let linkForAntentionMarketing = document.querySelector('a[href^="#design"]');
                linkForAntentionMarketing.setAttribute('style',
                    "background-color: #ff1300; color:white; transition:all 1s ease-in-out; padding:10px 2px; border-radius:5px; "
                );

                let linkForAntentionProgramming = document.querySelector('a[href^="#marketing"]');
                linkForAntentionProgramming.setAttribute("style",
                    "text-decoration:line-through; opacity:0.5; transition: all 1s ease-in-out; cursor: not-allowed;"
                );

                let linkForAntentionDesign = document.querySelector('a[href^="#programming"]');
                linkForAntentionDesign.setAttribute("style",
                    "text-decoration:line-through; opacity:0.5; transition: all 1s ease-in-out; cursor: not-allowed;"
                );

                clearAllCards();


                if (thirdElProject.classList[1] === "check") {

                    designCards.forEach(designCard => {
                        designCard.style.display = "block";
                    })
                    programmingCards.forEach(programmingCard => {
                        programmingCard.style.display = "none";
                    })
                    marketingCards.forEach(marketingCard => {
                        marketingCard.style.display = "none";
                    })



                }
            }

        }
        thirdElProject.addEventListener("click", getClickedThird);

        //see-more CARD-PROJECT
        let projectCardsFlexContainer = document.querySelector(".project-cards");

        let seeMoreBtn = document.querySelector(".see-more-btn");

        let clicksSeeMoreBtn = 0;

        let newDivSeeMoreCard;

        function seeMoreClick(newDivSeeMoreCard) {
            clicksSeeMoreBtn = clicksSeeMoreBtn + 1;


            for (let i = 0; i < allCards.length; i++) {
                newDivSeeMoreCard = document.createElement("div");
                newDivSeeMoreCard.className = "card";
                newDivSeeMoreCard.innerHTML = allCards[i].innerHTML;
                projectCardsFlexContainer.appendChild(newDivSeeMoreCard);



            }
            if (clicksSeeMoreBtn === 3) {
                seeMoreBtn.style.display = "none";



            }


            firstElProject.addEventListener("click",
                function seeMoreSeeMore() {
                    containContainerAndFlex();


                    marketingCards.forEach(marketing => {

                        marketing.setAttribute("style",
                            "flex: 0 0 33.33%; transition: transform 0.5s linear; margin-bottom: 0.9375rem;"
                        )
                        flexContainer.append(marketing)

                        function bubeFlexMonkey(bube) {
                            if (bube.matches) {
                                marketing.style.flex = "0 0 100%";
                            } else {
                                marketing.style.flex = "0 0 33.33%";
                            }
                        }

                        var bube = window.matchMedia("(max-width: 425px)")
                        bubeFlexMonkey(bube)
                        bube.addListener(bubeFlexMonkey)

                        var hoverCards = document.querySelector(".card-marketing");
                        hoverCards.addEventListener('mouseover', function () {
                            hoverCards.style.transform = "translate(0, -2%)";
                        });
                        hoverCards.addEventListener('mouseleave', function () {
                            hoverCards.style.transform = "translate(0, 0%)";
                        });

                        bubeSeeMore();
                        seeMoreStyleButtonLinks();




                    })

                    marketingCards.innerHTML = marketingCards.forEach(marketing => {
                        marketing.style.display = "block";


                    })

                    bubeGazi();



                }
            );

            secondElProject.addEventListener("click",
                function seeMoreSeeMore() {
                    containContainerAndFlex();


                    programmingCards.forEach(programming => {

                        programming.setAttribute("style",
                            "flex: 0 0 33.33%; transition: transform 0.5s linear; margin-bottom: 0.9375rem;"
                        )
                        flexContainer.append(programming)

                        function bubeFlexMonkey(bube) {
                            if (bube.matches) {
                                programming.style.flex = "0 0 100%";
                            } else {
                                programming.style.flex = "0 0 33.33%";
                            }
                        }

                        var bube = window.matchMedia("(max-width: 425px)")
                        bubeFlexMonkey(bube)
                        bube.addListener(bubeFlexMonkey)


                        console.log(flexContainer.children.length)

                        var hoverCards = document.querySelector(".card-programming");
                        hoverCards.addEventListener('mouseover', function () {
                            hoverCards.style.transform = "translate(0, -2%)";
                        });
                        hoverCards.addEventListener('mouseleave', function () {
                            hoverCards.style.transform = "translate(0, 0%)";
                        });

                        bubeSeeMore();
                        seeMoreStyleButtonLinks();

                    })

                    programmingCards.innerHTML = programmingCards.forEach(programming => {
                        programming.style.display = "block"
                        console.log("bube")
                    })

                    bubeGazi();


                }
            );



            thirdElProject.addEventListener("click",
                function seeMoreSeeMore() {
                    containContainerAndFlex();


                    designCards.forEach(design => {

                        design.setAttribute("style",
                            "flex: 0 0 33.33%;  transition: transform 0.5s linear; margin-bottom: 0.9375rem;"
                        )
                        flexContainer.append(design)

                        function bubeFlexMonkey(bube) {
                            if (bube.matches) {
                                design.style.flex = "0 0 100%";
                            } else {
                                design.style.flex = "0 0 33.33%";
                            }
                        }

                        var bube = window.matchMedia("(max-width: 425px)")
                        bubeFlexMonkey(bube)
                        bube.addListener(bubeFlexMonkey)


                        console.log(flexContainer.children.length)

                        var hoverCards = document.querySelector(".card-design");
                        hoverCards.addEventListener('mouseover', function () {
                            hoverCards.style.transform = "translate(0, -2%)";
                        });
                        hoverCards.addEventListener('mouseleave', function () {
                            hoverCards.style.transform = "translate(0, 0%)";
                        });

                        bubeSeeMore();
                        seeMoreStyleButtonLinks();

                    })

                    designCards.innerHTML = designCards.forEach(design => {
                        design.style.display = "block";

                    })

                    bubeGazi();


                }
            );



        }

        seeMoreBtn.addEventListener("click", seeMoreClick);

        function containContainerAndFlex() {
            bubeSeeMoreNone();
            container = document.createElement("div");
            bubeSeeMoreContainerStyle(container);
            document.body.appendChild(container);
            flexContainer = document.createElement("div");
            bubeFlexSeeMoreContainerStyle(flexContainer);
            container.append(flexContainer);
        }

        function bubeSeeMoreContainerStyle(container) {
            container.setAttribute("style", "width:80%; margin-left:auto; margin-right:auto;")
        }


        function bubeFlexSeeMoreContainerStyle(flexContainer) {
            flexContainer.setAttribute("style",
                "display: flex; align-items: center; justify-content: center; flex-wrap: wrap; margin-right: -0.9375rem;"
            )

        }

        function bubeSeeMoreNone() {
            seeMoreBtn.style.display = "none";
            projectCardsFlexContainer.style.display = "none";
        }

        function bubeSeeMore() {
            let content = document.querySelectorAll('.card-content');

            content.forEach(content => {
                content.setAttribute("style",
                    "margin-right: 0.9375rem; background-color: #FFF; border-radius: 5px; overflow: hidden; box-shadow: 0 0px 13px -2px black;"
                )








            })
            let cardText = document.querySelectorAll('.card-text');
            cardText.forEach(text => {
                text.setAttribute("style",
                    " padding: 0.9375rem; font-size: 0.875rem; word-spacing: 2px; min-width: 369px; max-width: 369px; margin: 0 auto;}"
                )

                function bubeMinMax(bube) {
                    if (bube.matches) {
                        text.style.minWidth = "0";
                        text.style.maxWidth = "none";
                    } else {
                        text.style.minWidth = "369px"
                        text.style.maxWidth = "369px"

                    }
                }

                var bube = window.matchMedia("(max-width: 425px)")
                bubeMinMax(bube)
                bube.addListener(
                    bubeMinMax)


            })

            let smallTittle = document.querySelectorAll('.small-title');
            smallTittle.forEach(smallTits => {
                smallTits.setAttribute("style",
                    "background-color: #fcd232; padding: 0.25rem; display: inline-block; font-size: 0.875rem; word-spacing: 3px;"
                )
            })

            let cardHeader = document.querySelectorAll(".card-header");
            cardHeader.forEach(cardHead => {
                cardHead.setAttribute("style", "font-size: 1.1875rem;")
            })

            let dateSpan = document.querySelectorAll(".date");
            dateSpan.forEach(date => {
                date.setAttribute("style", "font-size: 0.5rem;font-weight: 700;")
            })

            let cardBtn = document.querySelectorAll(".btn");
            cardBtn.forEach(button => {
                button.setAttribute("style", "text-align: right;")


            })




        }



        function seeMoreStyleButtonLinks() {
            let linkButton = document.querySelectorAll('.btn-link');


            linkButton.forEach(link => {
                link.classList.add("styleBtnSeeMore");
                link.setAttribute('style',
                    'color: #fff; display: inline-block; background-color: #ff1300; padding: 7px; border-radius: 5px;font-weight: 700; transition: all 0.3s ease-in-out;'
                )




            })
        };


        function btnSeeMoreBubeGhoust() {
            seeMoreBtn.style.display = "none";
        }
        firstElProject.addEventListener("click", btnSeeMoreBubeGhoust);
        secondElProject.addEventListener("click", btnSeeMoreBubeGhoust);
        thirdElProject.addEventListener("click", btnSeeMoreBubeGhoust);

        function bubeGazi() {
            let bubeGazi = document.querySelector("footer");
            document.body.appendChild(bubeGazi);

        }





        const smooth = document.querySelectorAll('a[href*="#"]');
        smooth.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });