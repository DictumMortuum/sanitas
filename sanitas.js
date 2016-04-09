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
    }
  }

  // Reveal public methods
  return [crp, blood, serum]

})();
