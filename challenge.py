# maak een prograamma die bestelling en uitrekenen en als bestel je 6 of meer appelflappen dan 3% KORTING op hele bon
# voorbeeld 22 olieballen = 17.10 en 3 appelflappen 4.95 in totaal 22.05

olieballen = int(input("Hoeveel olieballen wil je? "))
appelflapen = int(input("Hoeveel appelflapen wil je? "))

olieballen_zakken = olieballen // 10
olieballen_los = olieballen % 10

olieballen_prijs = (olieballen_zakken * 7.50) + (olieballen_los * 1.05)
appelflapen_prijs = appelflapen * 1.65

totaal = olieballen_prijs + appelflapen_prijs

if appelflapen >= 6:
    korting = 0.03 * totaal
    totaal -= korting

print(f"De totale kosten zijn: {totaal} euro.")




