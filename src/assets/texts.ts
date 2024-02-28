export const textCommon = {
  phone: "+48 736 250 545",
  email: "rafalfalandys@gmail.com",
  logo: "rafa",
  name: "Rafał Falandys",
};

type Text = {
  aboutPage: {
    desc: string;
  };
  contactPage: {
    textMe: string;
    reachMeAt: string;
    name: string;
    emailPhone: string;
    msg: string;
    fillAllError: string;
    send: string;
    actionError: string;
    actionOk: string;
  };

  loginPage: {
    login: string;
  };
  portfolioPage: {
    architecture: string;
    photography: string;
  };
  nav: {
    about: string;
    contact: string;
    edit: string;
    logout: string;
    lang: string;
  };
  projNav: {
    prev: string;
    back: string;
    next: string;
  };
  projText: {
    tdClause: string;
    coordinator: string;
    designer: string;
  };
  filters: {
    tags: string;
    all: string;
    work: string;
    studies: string;
    bar: string;
    outdoor: string;
    urbanPlanning: string;
    algorithmicDesign: string;
    defaultOrder: string;
    newFirst: string;
    oldFirst: string;
    hideFilters: string;
    showFilters: string;
  };
};

export const textsPL: Text = {
  aboutPage: {
    desc: "Full stack developer, specjalista projektowania parametrycznego, Magister architektury.",
  },
  contactPage: {
    textMe: "Masz pytania? Napisz:",
    reachMeAt: "Albo odezwij się na:",
    name: "Imię",
    emailPhone: "E-mail / Telefon",
    msg: "Wiadomość",
    fillAllError: "Uzupełnij wszystkie pola",
    send: "Wyślij",
    actionError: "Coś poszło nie tak, spróbuj ponownie.",
    actionOk: "Poszło! Dziękuję za kontakt.",
  },

  loginPage: {
    login: "Zaloguj się",
  },
  portfolioPage: {
    architecture: "Architektura",
    photography: "Fotografia",
  },
  nav: {
    about: "O mnie",
    contact: "Kontakt",
    edit: "Edycja",
    logout: "Wyloguj",
    lang: "Polski",
  },
  projNav: {
    prev: "Poprzedni projekt",
    back: "Powrót do projektów",
    next: "Następny projekt",
  },
  projText: {
    tdClause: `Nad projektem pracowałem w okresie zatrudnienia w Tillberg
      Design of Sweden. Wszystkie wizualizacje, grafiki, rysunki
      techniczne etc. należą do firmy Tillberg Design of Sweden. Prace
      tu zawarte nie mogą być wykorzystywane, publikowane ani
      edytowane bez uprzedniej zgody Tillberg Design of Sweden.`,
    coordinator: "koordynator",
    designer: "projektant",
  },
  filters: {
    tags: "Tagi",
    all: "Wszystko",
    work: "Praca",
    studies: "Studia",
    bar: "Bar",
    outdoor: "Pole",
    urbanPlanning: "Urbanistyka",
    algorithmicDesign: "Projektowanie Algorytmiczne",
    defaultOrder: "Domyślna kolejność",
    newFirst: "Od najnowszych",
    oldFirst: "Od najstarszych",
    hideFilters: "Ukryj filtry",
    showFilters: "Filtry",
  },
};

export const textsEN: Text = {
  aboutPage: {
    desc: "Master of Architecture, and UX designer.",
  },
  contactPage: {
    textMe: "Get in touch!",
    reachMeAt: "Or reach me at:",
    name: "Name",
    emailPhone: "E-mail / Phone",
    msg: "Message",
    fillAllError: "Please enter all data",
    send: "Send",
    actionError: "Something went wrong, try again.",
    actionOk: "Message sent succesfully.",
  },

  loginPage: {
    login: "Login",
  },
  portfolioPage: {
    architecture: "Architecture",
    photography: "Photography",
  },
  nav: {
    about: "About",
    contact: "Contact",
    edit: "Edit",
    logout: "Logout",
    lang: "English",
  },
  projNav: {
    prev: "Previous project",
    back: "Back to projects",
    next: "Next project",
  },
  projText: {
    tdClause: `Designed while employed at Tillberg Design of Sweden. All
      renderings, graphics, drawings, etc. belong to Tillberg Design
      of Sweden. The works contained here can't be utilized, published
      or worked on by another company/entity without prior agreement
      with Tillberg Design of Sweden.`,
    coordinator: "",
    designer: "",
  },
  filters: {
    tags: "Tags",
    all: "All",
    work: "Work",
    studies: "Studies",
    bar: "Bar",
    outdoor: "Outdoor",
    urbanPlanning: "Urban Planning",
    algorithmicDesign: "Algorithmic Design",
    defaultOrder: "Default order",
    newFirst: "Newest first",
    oldFirst: "Oldest first",
    hideFilters: "Hide filters",
    showFilters: "Filters",
  },
};
