//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here



// version 6 routing

// start page to first question
router.post('/v6/start', function (req, res) {

    res.redirect('/v6/questions/question-one')
  
  })

  // question 1 radio options routing - incomplete
router.post('/v6/questions/question-one', function(request, response) {

    var questionOne = request.session.data['whatDoYouNeed']
    if (questionOne == "register"){
        response.redirect("/v6/questions/register-question")
    } else if (questionOne == "filing"){
            response.redirect("/v6/questions/filing-question")
    } else if (questionOne == "maintaining"){
        response.redirect("/v6/questions/maintain-question")
    }
    else if (questionOne == "closingAndRestoring"){
        response.redirect("/v6/questions/close-company-question")
    }
    else if (questionOne == "penalties"){
        response.redirect("/v6/questions/penalties-question")
    }
    else if (questionOne == "tech"){
        response.redirect("/v6/questions/technical-help-question")
    }
    else if (questionOne == "report"){
        response.redirect("/v6/questions/company-complaint-question")
    } else if (questionOne == "somethingElse"){
        response.redirect("/v6/outcomes/outcome-something-else")
    }
    else {
        response.redirect("/v6/outcomes/generic-outcome")
    }
})


// registering filter question radio routing 

router.post('/v6/questions/register-question', function(request, response) {

    var registerQuestion = request.session.data['registerFilter']
    if (registerQuestion == "registeringCompany"){
        response.redirect("/v6/outcomes/register-outcome")
    } else if (registerQuestion == "authCode1"){
            response.redirect("/v6/outcomes/outcome-auth-code")
    }
     else {
        response.redirect("/v6/outcomes/outcome-something-else")
    }
})

// filing filter question radio routing - incomplete

router.post('/v6/questions/filing-question', function(request, response) {

    var filingQuestion = request.session.data['filingFilter']
    if (filingQuestion == "confirmationStatement"){
        response.redirect("/v6/outcomes/outcome-conf-stat")
    } else if (filingQuestion == "filingAccounts"){
            response.redirect("/v6/outcomes/outcome-accounts")
    } else if (filingQuestion == "trackFiling"){
        response.redirect("/v6/outcomes/outcome-track-filing")
    } else if (filingQuestion == "requestingTime"){
        response.redirect("/v6/outcomes/outcome-filing-extension")
    } else if (filingQuestion == "somethingElse"){
        response.redirect("/v6/outcomes/outcome-something-else")
    } 
     else {
        response.redirect("/v6/outcomes/generic-outcome")
    }
})



// maintain filter question radio routing 

router.post('/v6/questions/maintain-question', function(request, response) {

    var maintainQuestion = request.session.data['maintainFilter']
    if (maintainQuestion == "registeredEmailAddress"){
        response.redirect("/v6/outcomes/outcome-email-address")
    } else if (maintainQuestion == "registeredOfficeAddress"){
            response.redirect("/v6/outcomes/outcome-office-address")
    } else if (maintainQuestion == "directors"){
        response.redirect("/v6/outcomes/outcome-directors")
    } else if (maintainQuestion == "secretaries"){
        response.redirect("/v6/outcomes/outcome-secretaries")
    } 
    else if (maintainQuestion == "personsSignificantControl"){
        response.redirect("/v6/outcomes/outcome-PSCs")
    } 
    else if (maintainQuestion == "shareCapital"){
        response.redirect("/v6/outcomes/outcome-shares")
    } else if (maintainQuestion == "companyName"){
        response.redirect("/v6/outcomes/outcome-company-name")
    } 
    else if (maintainQuestion == "trackFiling2"){
        response.redirect("/v6/outcomes/outcome-track-filing")
    }  else if (maintainQuestion == "somethingElse"){
        response.redirect("/v6/outcomes/outcome-something-else")
    } 
     else {
        response.redirect("/v6/outcomes/generic-outcome")
    }
})


// filing update or change sub question routing

// router.post('/v6/filing-sub-question', function(request, response) {

//     var updateQuestion = request.session.data['updateFilter']
//     if (updateQuestion == "directorUpdate"){
//         response.redirect("/v6/generic-outcome")
//     } else if (updateQuestion == "pscChanges"){
//             response.redirect("/v6/generic-outcome")
//     } else if (updateQuestion == "fileShares"){
//         response.redirect("/v6/outcome-shares")
//     } else if (updateQuestion == "somethingElse"){
//         response.redirect("/v6/outcome-something-else")
//     } 
//      else {
//         response.redirect("/v6/generic-outcome")
//     }
// })


// closing filter question radio routing 

router.post('/v6/questions/close-company-question', function(request, response) {

    var closingQuestion = request.session.data['closingFilter']
    if (closingQuestion == "closingCompany"){
        response.redirect("/v6/outcomes/outcome-closing")
    } else if (closingQuestion == "restoring"){
        response.redirect("/v6/outcomes/outcome-restoring")
    } else if (closingQuestion == "objecting"){
        response.redirect("/v6/outcomes/outcome-objecting-strike-off")
    }
     else {
        response.redirect("/v6/outcomes/outcome-something-else")
    }
})





// penalties filter question radio routing - incomplete

router.post('/v6/questions/penalties-question', function(request, response) {

    var penaltiesQuestion = request.session.data['penaltiesFilter']
    if (penaltiesQuestion == "appealingPenalty"){
        response.redirect("/v6/outcomes/outcome-appeal")
    } else if (penaltiesQuestion == "payingPenalty"){
        response.redirect("/v6/outcomes/outcome-paying")
    } else if (penaltiesQuestion == "moreTime"){
        response.redirect("/v6/outcomes/outcome-filing-extension")
    } else if (penaltiesQuestion == "penaltiesSomethingElse"){
            response.redirect("/v6/outcomes/outcome-something-else")
    } else {
        response.redirect("/v6/outcomes/generic-outcome")
    }
})


// technical help filter question radio routing - incomplete

router.post('/v6/questions/technical-help-question', function(request, response) {

    var techQuestion = request.session.data['techFilter']
    if (techQuestion == "authCodeProblem"){
        response.redirect("/v6/outcomes/outcome-auth-code")
    } else if (techQuestion == "SignIn"){
            response.redirect("/v6/outcomes/outcome-sign-in")
    } else {
        response.redirect("/v6/outcomes/outcome-something-else")
    }
})



// report filter question radio routing - incomplete

router.post('/v6/questions/company-complaint-question', function(request, response) {

    var complaintQuestion = request.session.data['complaintFilter']
    if (complaintQuestion == "usingPersonalDetails"){
        response.redirect("/v6/outcomes/outcome-personal-details")
    } else if (complaintQuestion == "reportInfo"){
        response.redirect("/v6/outcomes/outcome-incorrect-info")
    } 
    else if (complaintQuestion == "authCodeProblem"){
        response.redirect("/v6/outcomes/outcome-auth-code")
    } 
    else if (complaintQuestion == "companyComplaint"){
        response.redirect("/v6/outcomes/outcome-company-complain")
    } 
    else if (complaintQuestion == "object2"){
        response.redirect("/v6/outcomes/outcome-objecting-strike-off")
    } 
    else if (complaintQuestion == "complaintSomethingElse"){
            response.redirect("/v6/outcomes/outcome-something-else")
    } 
    else {
        response.redirect("/v6/outcomes/generic-outcome")
    }
})
module.exports=router;
