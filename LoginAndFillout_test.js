Feature('Login');

Scenario('Login to the site and fill out the form', ({ I }) => {

    //Login to the site
    I.amOnPage('/')
    I.waitForElement('.panel-title', 3);
    I.fillField("#username", 'acorn@unqork.com ');
    I.fillField("#password", 'n3wLife!');
    I.click("//input[@type='submit']");

    //Wait and Fill Out the form
    I.waitForElement('#firstName', 5);
    I.fillField("#firstName", 'Mr Fish');
    //I.fillField("#middleName", 'Jr'); disabled field 
    //I.fillField("#lastName", 'Fish'); disabled field

    //Input: pnone number
    I.selectOption("#countries-mobileNumber", 'United States (+1)');
    I.fillField("#mobileNumber", '(650) 656-7577');

    //radio button, gender 
    I.click('text="Male"');

    //id number
    I.fillField('#idNumber', '1');

    //email
    I.fillField('#emailAddress', 'acorn@unqork.com');

    //Address fields
    I.fillField('#address-street', '950 Test Street');
    I.fillField('#address-street2', 'Apt 7609');
    I.fillField('#address-city', 'Austin');
    I.fillField('#address-state', 'TX');
    I.fillField('#address-zip', '78660');
    I.fillField('#address-country', 'United States');

    //employer
    //I.selectOption("#Whatisyourprimaryoccupation"); disabled dropdown, checkboxes
    I.fillField("#whoisyouremployer", 'Unqork');

    //radio button, citizen
    I.click('text="Yes"');

    // Save as Draft
    I.click("#insuranceDetailsColumnSaveasDraft");

    //confirmation
    //pause()
    I.click(".swal2-confirm");
    I.waitForElement("//button[contains(text(),'OK')]", 4);
});