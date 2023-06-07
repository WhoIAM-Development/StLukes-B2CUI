$(function () {

    let executed = false;

    // Try to execute the init button until the continue button is rendered.
    // The interval is cleared from the init method if the continue button is already rendered. 
    let interval = setInterval(() => {
        initDisplayControlAutoContinue();
    }, 100);

    function initDisplayControlAutoContinue() {

        let con = document.getElementById("continue");
        // return if continue button is not found 
        if (!con) {
            return;
        }

        if (executed) {
            return;
        }

        debugger;

        // clear the interval if continue is present. 
        clearInterval(interval);
        executed = true;

        let claimVerificationServerError = document.getElementById("claimVerificationServerError");


        if ($(".sendCode").length && $('#attributeList>ul>li').length) {

            var changeClaims = document.querySelector(".changeClaims")
            if (typeof (MutationObserver) != 'undefined') {

                $(con).attr("aria-disabled","true");
                $(con).attr("disabled","disabled");

                var ErrorObserver = new MutationObserver(function (mutations) {
                    if ($('.error.pageLevel[aria-hidden="false"]').length) {
                        $(".changeClaims").show();
                    }
                });
                var changeClaimsObserver = new MutationObserver(function (mutations) {
                    if ($(changeClaims).attr("aria-hidden") == "false") {

                        $(con).attr("aria-disabled","false");
                        $(con).removeAttr("disabled");
                        
                        ErrorObserver.observe(claimVerificationServerError, {
                            attributes: true,
                            attributeFilter: ['style']
                        });
                    }
                    else if ($(changeClaims).attr("aria-hidden") == "true") {

                        $(con).attr("aria-disabled","true");
                        $(con).attr("disabled","disabled");
                    }
                });
                changeClaimsObserver.observe(changeClaims, {
                    attributes: true,
                    attributeFilter: ['aria-hidden']
                });
            }
        }
    }

});