var Sanitas = (function () {

  var crp = {
    crp: function() {
      return {
        tooltip: "Ποσοτική μέτρηση CRP",
        min: 0,
        max: 6
      }
    }
  }

  var blood = {
    WBC: function() {
      return {
        tooltip: "Λευκά αιμοσφαίρια",
        min: 4000,
        max: 10000
      }
    },
    RBC: function() {
      return {
        tooltip: "Ερυθρά αιμοσφαίρια",
        min: 4200000,
        max: 5400000
      }
    },
    HB: function() {
      return {
        tooltip: "Αιμοσφαιρίνη",
        min: 12,
        max: 16
      }
    },
    HT: function() {
      return {
        tooltip: "Αιματοκρίτης",
        min: 36,
        max: 46
      }
    },
    MCV: function() {
      return {
        tooltip: "Μέσος όγκος ερυθρών",
        min: 77,
        max: 98
      }
    },
    MCH: function() {
      return {
        tooltip: "Μέση περιεκτικότητα Hb",
        min: 26,
        max: 32
      }
    },
    MCHC: function() {
      return {
        tooltip: "Μέση συγκέντρωση Hb",
        min: 32,
        max: 36
      }
    },
    PLT: function() {
      return {
        tooltip: "Αιμοπετάλια",
        min: 140000,
        max: 440000
      }
    },
    RDWCV: function() {
      return {
        tooltip: "Κατανομή μεγέθ. ερυθ.",
        min: 11.5,
        max: 14.5
      }
    },
    MPV: function() {
      return {
        tooltip: "Μέσος όγκος αιμοπεταλίων",
        min: 7.4,
        max: 11.5
      }
    }
  }

  var serum = {
    HbA1C: function() {
      return {
        tooltip: "Γλυκοζυλιωμένη αιμοσφαιρίνη ολικού αίματος",
        min: 4.8,
        max: 5.9
      }
    },
    Glucose: function() {
      return {
        tooltip: "Σάκχαρο ορού",
        min: 70,
        max: 110
      }
    },
    Urea: function() {
      return {
        tooltip: "Ουρία ορού",
        min: 10,
        max: 50
      }
    },
    Creatinine: function() {
      return {
        tooltip: "Κρεατινίνη ορού",
        min: 0.6,
        max: 1.4
      }
    },
    UricAcid: function() {
      return {
        tooltip: "Ουρικό οξύ ορού",
        min: 2.4,
        max: 6
      }
    },
    Cholesterol: function() {
      return {
        tooltip: "Χοληστερόλη ολική ορού",
        min: 130,
        max: 200
      }
    },
    HDLChol: function() {
      return {
        tooltip: "Χοληστερόλη HDL ορού",
        min: 50
      }
    },
    LDLChol: function() {
      return {
        tooltip: "Χοληστερόλη LDL ορού",
        max: 115
      }
    },
    triglycerides: function() {
      return {
        tooltip: "Τριγλυκερίδια ορού",
        max: 150
      }
    },
    cacalcium: function() {
      return {
        tooltip: "Ασβέστιο ορού",
        min: 8.4,
        max: 10.1
      }
    },
    kpotassium: function() {
      return {
        tooltip: "Κάλιο ορού",
        min: 3.5,
        max: 5.1
      }
    },
    nasodium: function() {
      return {
        tooltip: "Νάτριο ορού",
        min: 137,
        max: 150
      }
    },
    SGOTAST: function() {
      return {
        tooltip: "Οξαλοξεική τρανσαμινάση ορού",
        min: 11,
        max: 38
      }
    },
    SGPTLAT: function() {
      return {
        tooltip: "Πυροσταφυλική τρανσαμινάση ορού",
        min: 11,
        max: 43
      }
    },
    yGT: function() {
      return {
        tooltip: "Γ-γλουτάμυλο-τρασφεράση ορού",
        min: 8,
        max: 35
      }
    },
    ALP: function() {
      return {
        tooltip: "Αλκαλική φωσφατάση ορού",
        min: 23,
        max: 104
      }
    }
  }

  var cyttarine = {
    albumin: function() {
      return {
        tooltip: "Λευκωματίνες",
        min: 55.8,
        max: 66.1
      }
    },
    alpha1: function() {
      return {
        tooltip: "Α1-σφαιρίνες",
        min: 2.9,
        max: 4.9
      }
    },
    alpha2: function() {
      return {
        tooltip: "Α2-σφαιρίνες",
        min: 7.1,
        max: 11.8
      }
    },
    beta: function() {
      return {
        tooltip: "Β-σφαιρίνες",
        min: 8.4,
        max: 13.1
      }
    },
    gamma: function() {
      return {
        tooltip: "Γ-σφαιρίνες",
        min: 11.1,
        max: 18.8
      }
    },
    ratioag: function() {
      return {
        tooltip: "Λευκωματικό Πηλίκο",
        min: 1,
        max: 2
      }
    },
    totalprotein: function() {
      return {
        tooltip: "Ολικά λευκώματα",
        min: 6.4,
        max: 8.7
      }
    }
  }
  // Reveal public methods
  return [crp, blood, serum, cyttarine]

})();
