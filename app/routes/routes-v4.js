//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here



// version 4 routing

// start page to first question
router.post('/v4/start', function (req, res) {

    res.redirect('/v4/question-one')
  
  })

  // question 1 radio options routing - incomplete
router.post('/v4/question-one', function(request, response) {

    var questionOne = request.session.data['whatDoYouNeed']
    if (questionOne == "register"){
        response.redirect("/v4/register-question")
    } else if (questionOne == "filing"){
            response.redirect("/v4/filing-question")
    } else if (questionOne == "maintaining"){
        response.redirect("/v4/maintain-question")
    }
    else if (questionOne == "closingAndRestoring"){
        response.redirect("/v4/close-company-question")
    }
    else if (questionOne == "penalties"){
        response.redirect("/v4/penalties-question")
    }
    else if (questionOne == "tech"){
        response.redirect("/v4/technical-help-question")
    }
    else if (questionOne == "report"){
        response.redirect("/v4/company-complaint-question")
    } else if (questionOne == "somethingElse"){
        response.redirect("/v4/outcome-something-else")
    }
    else {
        response.redirect("/v4/generic-outcome")
    }
})


// registering filter question radio routing 

router.post('/v4/register-question', function(request, response) {

    var registerQuestion = request.session.data['registerFilter']
    if (registerQuestion == "registeringCompany"){
        response.redirect("/v4/register-outcome")
    } else if (registerQuestion == "authCode1"){
            response.redirect("/v4/generic-outcome")
    }
     else {
        response.redirect("/v4/outcome-something-else")
    }
})

// filing filter question radio routing - incomplete

router.post('/v4/filing-question', function(request, response) {

    var filingQuestion = request.session.data['filingFilter']
    if (filingQuestion == "confirmationStatement"){
        response.redirect("/v4/outcome-conf-stat")
    } else if (filingQuestion == "filingAccounts"){
            response.redirect("/v4/outcome-accounts")
    } else if (filingQuestion == "trackFiling"){
        response.redirect("/v4/outcome-track-filing")
    } else if (filingQuestion == "requestingTime"){
        response.redirect("/v4/generic-outcome")
    } else if (filingQuestion == "somethingElse"){
        response.redirect("/v4/outcome-something-else")
    } 
     else {
        response.redirect("/v4/generic-outcome")
    }
})



// maintain filter question radio routing 

router.post('/v4/maintain-question', function(request, response) {

    var maintainQuestion = request.session.data['maintainFilter']
    if (maintainQuestion == "registeredEmailAddress"){
        response.redirect("/v4/generic-outcome")
    } else if (maintainQuestion == "registeredOfficeAddress"){
            response.redirect("/v4/generic-outcome")
    } else if (maintainQuestion == "directors"){
        response.redirect("/v4/generic-outcome")
    } else if (maintainQuestion == "secretaries"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (maintainQuestion == "personsSignificantControl"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (maintainQuestion == "shareCapital"){
        response.redirect("/v4/outcome-shares")
    } else if (maintainQuestion == "companyName"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (maintainQuestion == "trackFiling2"){
        response.redirect("/v4/outcome-track-filing")
    }  else if (maintainQuestion == "somethingElse"){
        response.redirect("/v4/outcome-something-else")
    } 
     else {
        response.redirect("/v4/generic-outcome")
    }
})


// filing update or change sub question routing

// router.post('/v4/filing-sub-question', function(request, response) {

//     var updateQuestion = request.session.data['updateFilter']
//     if (updateQuestion == "directorUpdate"){
//         response.redirect("/v4/generic-outcome")
//     } else if (updateQuestion == "pscChanges"){
//             response.redirect("/v4/generic-outcome")
//     } else if (updateQuestion == "fileShares"){
//         response.redirect("/v4/outcome-shares")
//     } else if (updateQuestion == "somethingElse"){
//         response.redirect("/v4/outcome-something-else")
//     } 
//      else {
//         response.redirect("/v4/generic-outcome")
//     }
// })


// closing filter question radio routing 

router.post('/v4/close-company-question', function(request, response) {

    var closingQuestion = request.session.data['closingFilter']
    if (closingQuestion == "closingCompany"){
        response.redirect("/v4/generic-outcome")
    } else if (closingQuestion == "restoring"){
        response.redirect("/v4/generic-outcome")
    } else if (closingQuestion == "objecting"){
        response.redirect("/v4/generic-outcome")
    }
     else {
        response.redirect("/v4/outcome-something-else")
    }
})





// penalties filter question radio routing - incomplete

router.post('/v4/penalties-question', function(request, response) {

    var penaltiesQuestion = request.session.data['penaltiesFilter']
    if (penaltiesQuestion == "appealingPenalty"){
        response.redirect("/v4/outcome-appeal")
    } else if (penaltiesQuestion == "penaltiesSomethingElse"){
            response.redirect("/v4/outcome-something-else")
    } else {
        response.redirect("/v4/generic-outcome")
    }
})


// technical help filter question radio routing - incomplete

router.post('/v4/technical-help-question', function(request, response) {

    var techQuestion = request.session.data['techFilter']
    if (techQuestion == "authCodeProblem"){
        response.redirect("/v4/generic-outcome")
    } else if (techQuestion == "SignIn"){
            response.redirect("/v4/outcome-sign-in")
    } else {
        response.redirect("/v4/outcome-something-else")
    }
})



// report filter question radio routing - incomplete

router.post('/v4/company-complaint-question', function(request, response) {

    var complaintQuestion = request.session.data['complaintFilter']
    if (complaintQuestion == "usingPersonalDetails"){
        response.redirect("/v4/outcome-personal-details")
    } else if (complaintQuestion == "reportInfo"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (complaintQuestion == "authCodeProblem"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (complaintQuestion == "companyComplaint"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (complaintQuestion == "object2"){
        response.redirect("/v4/generic-outcome")
    } 
    else if (complaintQuestion == "complaintSomethingElse"){
            response.redirect("/v4/outcome-something-else")
    } 
    else {
        response.redirect("/v4/generic-outcome")
    }
})
module.exports=router;
