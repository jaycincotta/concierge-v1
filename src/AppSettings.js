const API = endpoint => "https://mydev.caseparts.com/secure/" + endpoint

const AppSettings = {
    AppName: "Concierge",
    Urls: {
      Login: API("authenticate/login"),
      Logout: API("authenticate/logout"),
      Impersonate: email => email
        ? API("authenticate/impersonate?email=") + email
        : API("authenticate/impersonate"),
      Guest: API("test/guest"),
      Customer: API("test/customer"),
      LinkedCustomer: API("test/linkedcustomer"),
      Employee: API("test/employee"),
      ImpersonateSearch: API("test/search?val=")
    }
}

export default AppSettings