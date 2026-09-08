*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource
Resource    ../resources/locators_elements.resource
Resource    ../resources/keywords_screen.resource

*** Variables ***
#${URL}    https://accenture70.pegalabs.io/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD
#${USERNAME}    abhinav.n.mishra@accenture.com
#${PASSWORD}    rules@234


*** Test Cases ***

TC001_Login to Pega Work Portal and Start Client Onboarding Case
    [Documentation]    This test case logs into the Pega Work Portal and starts a Client Onboarding case.
    [Tags]             TC-001
    Login to Pega Work Portal
    Start Case Creation
    Start Client Onboarding Case
    Client Onboarding Popup Actions

