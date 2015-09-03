function backgroundFadeOut() {
                      $('#intro-overlay').addClass('backgroundFadeOut');  
                }
                
                function removeFirstRow() {
                        for (var i = 0; i < 9; i++) {
                                $('.grid-unit:eq(' + i + ')').addClass('gridFadeOut');
                        }
                }
                
                function removeSecondRow() {
                        for (var i = 9; i < 18; i++) {
                                $('.grid-unit:eq(' + i + ')').addClass('gridFadeOut');
                        }
                }
                
                function removeThirdRow() {
                        for (var i = 18; i < 27; i++) {
                                $('.grid-unit:eq(' + i + ')').addClass('gridFadeOut');
                        }
                }
                
                function removeFourthRow() {
                        for (var i = 27; i < 36; i++) {
                                $('.grid-unit:eq(' + i + ')').addClass('gridFadeOut');
                        }
                }
                
                function removeFifthRow() {
                        for (var i = 36; i < 45; i++) {
                                $('.grid-unit:eq(' + i + ')').addClass('gridFadeOut');
                        }
                }
                
                function impactTextFade() {
                        $('.impact').addClass('animated fadeOut');
                }
                
                function removeIntro() {
                        $('.introduction').css("display", "none");
                        $('.impact').css("display", "none");
                }
                
                $(window).load(function() {
                        setTimeout(removeFirstRow, 3000);
                        setTimeout(removeSecondRow, 3200);
                        setTimeout(removeThirdRow, 3400);
                        setTimeout(impactTextFade, 3400);
                        setTimeout(removeFourthRow, 3600);
                        setTimeout(removeFifthRow, 3800);
                        setTimeout(backgroundFadeOut, 3800);
                        setTimeout(removeIntro, 6000);      
                });