# GameHub

#####   1   #####

GameHub to prosty portal katalogujący gry  który umożliwi:  
 przeglądanie bazy gier, tworzenie prywatnych list użytkownika (np. posiadane, 
ukończone, do ogrania), 
 ocenianie i komentowanie gier, 
 automatyczne rankingi (popularność/ocena), 
 podstawowa administracja (dodawanie/edycja wpisów przez admina). 


Wymagania funkcjonalne: 
- Rejestracja / logowanie (email + hasło, JWT) 
- Strona główna / katalog gier — lista z paginacją, sortowaniem, filtrowaniem 
(gatunek, platforma, rok) 
- Kartka gry— opis, obrazek, gatunki, linki, średnia ocena, liczba ocen, komentarze 
- Prywatne listy użytkownika — tworzenie nazwanej listy + dodawanie/usuń gier 
(np. „Posiadane”, „Do ogrania”) 
- Oceny (1–5) i komentarze — każdy zarejestrowany użytkownik może ocenić i 
skomentować 
- Ranking popularności — automatycznie wyliczany na podstawie aktywności 
- Panel administratora — dodawanie/edycja/usuwanie gier, zarządzanie 
użytkownikami 


User stories — przykłady i kryteria akceptacji 
- Jako niezalogowany użytkownik chcę przeglądać listę gier, żeby zobaczyć co jest w 
serwisie.<br> 
AC: widzę stronę listy z tytułem, miniaturą, średnią oceną i gatunkami; mogę filtrować i 
sortować. 

- Jako użytkownik zarejestrowany chcę dodać grę do mojej prywatnej listy „Do ogrania”. <br>
AC: gra pojawia się na mojej liście, widzę ją w profilu; inne osoby nie widzą moich 
prywatnych list. 

- Jako użytkownik chcę ocenić grę (1–5) i dodać komentarz.<br> 
AC: ocena wpływa na średnią; komentarz pojawia się pod grą w czasie rzeczywistym 
(lub po odświeżeniu). 

- Jako administrator chcę dodać nową grę do katalogu. <br>
AC: nowa gra jest widoczna w katalogu; wszystkie wymagane pola walidowane. 

- Jako użytkownik chcę zobaczyć ranking „Top 10 popularnych gier”.<br> 
AC: lista aktualizuje się na podstawie aktywności (oceny/komentarze/listy/wyświetlenia).
