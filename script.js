function flightselected (value)
{
    switch (value)
    {
        case "JetBlue":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "United":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 10in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Delta":
            document.getElementById("carryOnSize").innerHTML = "22in x 14 x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "American":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "SouthWest":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18.5in x 8.5in x 13.5in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Emirates":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 8in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 7in";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium)";
            break;
        case "Qatar":
            document.getElementById("carryOnSize").innerHTML = "20in x 15in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Saudi":
            document.getElementById("carryOnSize").innerHTML = "<= 62 inch";
            document.getElementById("personalItemSize").innerHTML = "<= 15lb*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "AirAsia":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "15in x 11in x 4in";
            document.getElementById("maxWeight").innerHTML = "15lb";
            break;
        case "AirChina":
            document.getElementById("carryOnSize").innerHTML = "21in x 16in x 8in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "11lb (Economy), 17lb (First)";
            break;
        case "ANZG":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 30lb (Business).";
            break;
        case "ANA":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 8in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "Cathay":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 9in";
            document.getElementById("personalItemSize").innerHTML = "16in x 12in x 6in";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 30lb (First)";
            break;
        case "Cebu":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb";
            break;
        case "ChinaAirlines":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "CEA":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "CSA":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "Garuda":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg (Domestic), 23kg (International)";
            break;
        case "Hainan":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg (Domestic), 23kg (International)";
        case "JAL":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg (Domestic), 23kg (International)";
            break;
        case "JetAirways":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "50lb (Domestic), 50lb/70lb (International)";
            break;
        case "Jetstar":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "40kg (Domestic), 23kg/32kg (International)";
            break;
        case "Kingfisher":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg-40kg (Domestic), 23kg/32kg (International)";
        case "KoreanAir":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "110lb (Domestic), 70lb (International)";
            break;
        case "LionAir":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "15kg (Domestic), 23kg (International)";
            break;
        case "MalaysiaAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "30kg (Domestic), 23kg (International)";
            break;
        case "Qantas":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "<=40kg (Domestic), 50lb (International)";
            break;
        case "ShenzhenAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "15kg (Domestic), 23kg (International)";
            break;
        case "SingaporeAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "30kg (Domestic), 23kg (International)";
            break;
        case "TAI":
            document.getElementById("carryOnSize").innerHTML = "22in x 18in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 23kg (International)";
            break;
        case "VietnamAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "VirginBlue":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "23kg";
            break;
        case "AerLingus":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Aeroflot":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "33lb (Domestic), 50lb (International)";
            break;
        case "AirBerlin":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "AirFrance":
            document.getElementById("carryOnSize").innerHTML = "21in x 13in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "66lb (Domestic), 50lb (International)";
            break;
        case "Alitalia":
            document.getElementById("carryOnSize").innerHTML = "21in x 13in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "44lb (Domestic), 70lb (International)";
            break;
        case "AustrianAG":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "33lb (Domestic), 50lb (International)";
            break;
        case "BritishAirways":
            document.getElementById("carryOnSize").innerHTML = "22in x 18in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "66lb (Domestic), 50lb (International)";
            break;
        case "easyJet":
            document.getElementById("carryOnSize").innerHTML = "22in x 18in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "50lb (Standard), 70lb (Business)";
            break;
        case "IAG":
            document.getElementById("carryOnSize").innerHTML = "22in x 18in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "66lb (Domestic), 50lb (International)";
            break;
        case "Lufthansa":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 9in";
            document.getElementById("personalItemSize").innerHTML = "15in x 12in x 4in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business/First)";
            break;
        case "NorwegianAS":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "15in x 12in x 8in";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "Ryanair":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "15in x 9in x 8in";
            document.getElementById("maxWeight").innerHTML = "22lb (Economy), 44lb (Business)";
            break;
        case "SASSA":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "16in x 12in x 6in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "Swiss":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "15in x 12in x 4in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "Thomson":
            document.getElementById("carryOnSize").innerHTML = "24in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
        case "THY":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 9in";
            document.getElementById("personalItemSize").innerHTML = "16in x 12in x 6in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "Vueling":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "16in x 12in x 6in";
            document.getElementById("maxWeight").innerHTML = "33lb (Economy), 66lb (Business)";
            break;
        case "Avianca":
            document.getElementById("carryOnSize").innerHTML = "21in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 10in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "AviancaTaca":
            document.getElementById("carryOnSize").innerHTML = "21in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "17in x 14in x 10in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "GolLinhas":
            document.getElementById("carryOnSize").innerHTML = "21in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "14in x 17in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "LANA":
            document.getElementById("carryOnSize").innerHTML = "21in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "14in x 14in x 10in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "TAMLinhas":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "AirCanada":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 6in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "AirTran":
            document.getElementById("carryOnSize").innerHTML = "55 linear inches";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Alaska":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "ASA":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "16.25in x 13.5in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Continental":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "ExpressJet":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Frontier":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Mesa":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Pinnacle":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "USAirways":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "WestJet":
            document.getElementById("carryOnSize").innerHTML = "21.5in x 15.5in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        default:
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
    }
}

// note to self:
// id = carryOnSize
// personalItemSize
// maxWeight