# PS 6 - 05.03.2023 WebStorage & ReactRouter



Docs:

WebStorage - https://www.w3schools.com/html/html5_webstorage.asp

ReactRouter - https://reactrouter.com/en/6.8.2/start/tutorial

Instalacja reactRouter'a :
`npm install react-router-dom localforage match-sorter sort-by`


# Zadanie 1 - sessionStorage vs localStorage

Celem tego zadania jest zrozumienie działania oraz różnic pomiędzy session i localStorage. Aby poglądać / modyfikować powyższe wartości nie musisz mieć własnej aplikacji. Wejdź na dowolną stronę np [podyplomówka](https://javascript.wi.pb.edu.pl/?utm_source=wwwpb&utm_medium=www&utm_campaign=oferta&utm_id=javascript), otwórz konsolę i po wpisaniu `localStorage` lub `sessionStorage` zobaczysz aktualne wartości które są zapisane dla tej strony www.



dodawanie wartości do l.storage - `localStorage.setItem("lsUser", "Jan Local");`

dodawanie wartości do s.storage - `sessionStorage.setItem("ssUser", "Jan Session");`



Wykorzystując powyższe instrukcje dodaj wartości do local / session storage, podejrzyj je, a następnie:

- odśwież stronę - zrób podgląd

- zamknij kartę przeglądarki, odpal stronę ponownie - zrób podgląd

- zamknij przeglądarkę - zrób podgląd

- otwórz przeglądarkę w trybie incognito - zrób podgląd



Przeanalizuj w którym podpunkcie straciłeś dostęp do wartości z sessionStorage a w którym z localStorage.



# Zadanie 2 - ReactRouter


Po zainstalowaniu ReactRoutera (komenda była podana u góry) możemy dodać stronę główną oraz podstrony (przejścia) dla Naszej aplikacji. Będziemy to robić na "samej górze" naszej aplikacji, a zatem w pliku `index.js`

Celem tego zadania jest "opakowanie" naszej aplikacji w komponent ReactRoutera za pomocą dedykowanej metody "createBrowserRouter" dostarczonej przez react-router-dom i ustawienie komponentu <App> jako wyświetlanego w domyślnej lokalizacji. Przykład jak tego dokonać jest opisany [tutaj](https://reactrouter.com/en/6.8.2/start/tutorial#adding-a-router)

W końcowym efekcie aplikacja powinna zachowywać się dokładnie tak samo jak poprzednio.

Gdy udało Ci się to zrobić, w ramach testu do lokalizacji domyśnej wstaw inny komponent np Results zamiast App, zaobserwuj zmiany poczym wróc do rozwiązania z komponentem App jako domyślnym.

Pamiętaj: Jeżeli chcesz użyć komponentu Results, musisz go najpierw zaimportować u góry pliku


# Zadanie 3 - Login Page jako strona startowa


Jeżeli przetestowałeś jakiś inny komponent niż App jako komponent domyślny w powyższym zadaniu, to już wiesz w jaki sposób wyświetlić coś innego niż naszą aplikację na "dzień dobry". Celem tego zadania jest:

- Utworzenie zupełnie nowego komponentu "LoginPage" w lokalizacji - `components/LoginPage/LoginPage.js` (niech będzie to komponent funkcyjny)

- Komponent ten powinien wyświetlać przycisk "Sign In" - na razie to wszystko...

- LoginPage powinien być komponentem wyświetlanym domyślnie zatem zastąp użycie komponentu App w index.js utworzonym przed chwilą (routing dla ścieżki domyślnej tj. "/").

Podobnie jak w poprzednim zadaniu, pamiętaj o zaimportowaniu LoginPage u góry !!!

Na koniec tego zadania powinieneś widzieć przycisk "Sign In" który nic nie robi a na dodatek nie masz dostępu do reszty aplikacji (╥﹏╥)


# Zadanie 4 - Nowy adres - routing dla aplikacji

Celem tego zadania jest "odzyskanie" dostępu do głównej części aplikacji, na razie bez ingerowania w przycisk, a poprzez ręczne zmodyfikowanie adresu url, aby tego dokonać musisz:

- dodać nowy Route dla porządanego adresu (niech będzie to "/dashboard"), aby to zrobić musisz dodać nowy element w liście przekazywanej do funkcji "createBrowserRouter" który będzie przypisany do adresu "/dashboard"

- po dodaniu nowego adresu dopisz w przeglądarce http://localhost:3000 **/dashboard**

Na koniec tego zadania powinieneś mieć możliwość ręcznej nawigacji pomiędzy komponentami App oraz LoginPage poprzez modyfikowanie końcówki adresu url.



# Zadanie 5 - Nawigowanie po aplikacji

Zastąpmy nawigowanie ręczne klikaniem po aplikacji. W ramach tego zadania wykonaj następujące przekierowania:

- kliknięcie na przycisk "Sign In" w komponencie LoginPage powinno przenosić użytkownika do adresu "/dashboard" -> strona główna (symulujemy logowanie)

- kliknięcie na przycisk "Sign out" w komponencie Header (musisz utworzyć taki przycisk) powinno przenosić użytkownika do ścieżki domyślnej "/" -> strona logowania (symulujemy wylogowanie)

Za obsługę przekierowań odpowiada komponent < Link >, którego przykłady użycia znajdziesz [tutaj](https://reactrouter.com/en/6.8.2/start/tutorial#client-side-routing) . Musisz zatem "opakować przyciski "Sign In" oraz "Sign out" w komponent < Link > zgodnie z przykładem.

# Zadanie 6 - Page not Found - 404

W ramach tego zadania dodaj funkcjonalność, która będzie przenosiła użytkownika na konkretny widok po wpisaniu adresu, który nie posiada przypisanej ścieżki. Aby to zrobić powinieneś dodać klucz errorElement dla odpowiedniego obiektuy w fuknkcji "createBrowserRouter". Dokumentacja znajduje się [tutaj](https://reactrouter.com/en/6.8.2/start/tutorial#handling-not-found-errors).

W ramach tego zadania utwórz nowy komponent zlokalizowany w /components/Page404/Page404.js, który będzie wyświetlał zawartość strony 404.

# Zadanie 7 - Logowanie użytkownika - zapis do localStorage


Celem tego zadania jest dodanie do komponentu LoginPage pola tekstowego z etykietą "User name" w którym będziemy podawali nazwę użytkownika. Użytkownik ten powinien być zapisany w localStorage abyśmy mogli nastepnie wyświetlić jego nazwę w aplikacji. Podczas wylogowywania z aplikacji użytkownik ten powinien być również kasowany z localStorage.

Celem tego zadania jest dodanie do komponentu LoginPage dwóch pól tekstowych "First name" oraz "Last name", które będą pobierały dane logującego się użytkownika.

Użytkownik ten powinien być zapisany w localStorage abyśmy mogli nastepnie wyświetlić jego nazwę w aplikacji. Podczas wylogowywania z aplikacji użytkownik ten powinien być również kasowany z localStorage.

Informacje o takim użytkowniku będzie można zapisać w obiekcie o następującej strukturze:
`{
firstName: 'Jacek',
lastName: 'Placek
}`

Taki właśnie obiekt powinien być przetrzymywany w localStorage aby nadal była możliwość wyświetlenia imienia i nazwiska aktualnie zalogowanego użytkownika w komponencie Header.

Do tego zadania musisz wykorzystać wspomniane na wykładzie metody JSON.stringify() oraz JSON.parse()

# Zadanie 8 - Router guard - wymuszenie przeniesienia do login page jeżeli użytkownik nie istnieje

Celem tego zadania jest dodanie do komponentu App.js takiej logiki, która za każdym razem sprawdzi czy istnieje użytkownik zapisany w localStorage.

- Jeżeli tak -> aplikacja zachowa się normalnie

- Jeżeli nie -> użytkownik zostanie przeniesiony na stronę logowania (tak na prawdę nie zobaczy nawet strony głównej)

Aby wykonać test powyższego zadania zaloguj się normalnie, poczym ręcznie tj. przez konsole w przeglądarce usuń użytkownika z localStorage, komenda `localStorage.clear()` wyczyści cały storage. Następnie odśwież stronę - skoro usunąłeś użytkokwnika, to powinieneś wylądować na stronie LoginPage
