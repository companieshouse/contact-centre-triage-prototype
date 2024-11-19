//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here

//version 1 routing commented out to allow for v2 routing - haven't worked out routing and routes folder yet whoops
// // start page to first question
// router.post('/v1/start', function (req, res) {

//     res.redirect('question-one')
  
//   })

//   // question 1 radio options routing - incomplete
// router.post('/question-one', function(request, response) {

//     var questionOne = request.session.data['whatDoYouNeed']
//     if (questionOne == "register"){
//         response.redirect("/v1/generic-outcome")
//     } else if (questionOne == "filing"){
//             response.redirect("/v1/filing-question")
//     } else if (questionOne == "penalties"){
//         response.redirect("/v1/penalties-question")
//     }
//     else if (questionOne == "report"){
//         response.redirect("/v1/company-complaint-question")
//     } else if (questionOne == "somethingElse"){
//         response.redirect("/v1/outcome-something-else")
//     }
//     else {
//         response.redirect("/v1/generic-outcome")
//     }
// })

// // filing filter question radio routing - incomplete

// router.post('/filing-question', function(request, response) {

//     var filingQuestion = request.session.data['filingFilter']
//     if (filingQuestion == "confirmationStatement"){
//         response.redirect("/v1/outcome-conf-stat")
//     } else if (filingQuestion == "filingAccounts"){
//             response.redirect("/v1/generic-outcome")
//     } else if (filingQuestion == "filingLogIn"){
//         response.redirect("/v1/outcome-sign-in")
//     } else if (filingQuestion == "trackFiling"){
//         response.redirect("/v1/outcome-track-filing")
//     } else if (filingQuestion == "somethingElse"){
//         response.redirect("/v1/outcome-something-else")
//     } 
//      else {
//         response.redirect("/v1/generic-outcome")
//     }
// })



// // penalties filter question radio routing - incomplete

// router.post('/penalties-question', function(request, response) {

//     var penaltiesQuestion = request.session.data['penaltiesFilter']
//     if (penaltiesQuestion == "appealingPenalty"){
//         response.redirect("/v1/outcome-appeal")
//     } else if (penaltiesQuestion == "penaltiesSomethingElse"){
//             response.redirect("/v1/outcome-something-else")
//     } else {
//         response.redirect("/v1/generic-outcome")
//     }
// })


// // report filter question radio routing - incomplete

// router.post('/company-complaint-question', function(request, response) {

//     var complaintQuestion = request.session.data['complaintFilter']
//     if (complaintQuestion == "usingPersonalDetails"){
//         response.redirect("/v1/outcome-personal-details")
//     } else if (complaintQuestion == "complaintSomethingElse"){
//             response.redirect("/v1/outcome-something-else")
//     } else if (complaintQuestion == "cantSignIn"){
//         response.redirect("/v1/outcome-sign-in")
//     }
//     else {
//         response.redirect("/v1/generic-outcome")
//     }
// })



// version 2 routing

// start page to first question
router.post('/v2/start', function (req, res) {

    res.redirect('/v2/question-one')
  
  })

  // question 1 radio options routing - incomplete
router.post('/question-one', function(request, response) {

    var questionOne = request.session.data['whatDoYouNeed']
    if (questionOne == "register"){
        response.redirect("/v2/generic-outcome")
    } else if (questionOne == "filing"){
            response.redirect("/v2/filing-question")
    } else if (questionOne == "penalties"){
        response.redirect("/v2/penalties-question")
    }
    else if (questionOne == "report"){
        response.redirect("/v2/company-complaint-question")
    } else if (questionOne == "somethingElse"){
        response.redirect("/v2/outcome-something-else")
    }
    else {
        response.redirect("/v2/generic-outcome")
    }
})

// filing filter question radio routing - incomplete

router.post('/filing-question', function(request, response) {

    var filingQuestion = request.session.data['filingFilter']
    if (filingQuestion == "confirmationStatement"){
        response.redirect("/v2/outcome-conf-stat")
    } else if (filingQuestion == "filingAccounts"){
            response.redirect("/v2/outcome-accounts")
    } else if (filingQuestion == "filingLogIn"){
        response.redirect("/v2/outcome-sign-in")
    } else if (filingQuestion == "trackFiling"){
        response.redirect("/v2/outcome-track-filing")
    } else if (filingQuestion == "somethingElse"){
        response.redirect("/v2/outcome-something-else")
    } 
     else {
        response.redirect("/v2/generic-outcome")
    }
})



// penalties filter question radio routing - incomplete

router.post('/penalties-question', function(request, response) {

    var penaltiesQuestion = request.session.data['penaltiesFilter']
    if (penaltiesQuestion == "appealingPenalty"){
        response.redirect("/v2/outcome-appeal")
    } else if (penaltiesQuestion == "penaltiesSomethingElse"){
            response.redirect("/v2/outcome-something-else")
    } else {
        response.redirect("/v2/generic-outcome")
    }
})


// report filter question radio routing - incomplete

router.post('/company-complaint-question', function(request, response) {

    var complaintQuestion = request.session.data['complaintFilter']
    if (complaintQuestion == "usingPersonalDetails"){
        response.redirect("/v2/outcome-personal-details")
    } else if (complaintQuestion == "complaintSomethingElse"){
            response.redirect("/v2/outcome-something-else")
    } else if (complaintQuestion == "cantSignIn"){
        response.redirect("/v2/outcome-sign-in")
    } else if (complaintQuestion == "companyComplaint"){
        response.redirect("/v2/outcome-company-complain")
    }
    else {
        response.redirect("/v2/generic-outcome")
    }
})