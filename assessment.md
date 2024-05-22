# Assessment

1.  Aggiungere una rotta nel main [router](src/app/app-routing.module.ts) chiamata `HomePage` che contenga l'html presente;
2.  Sulla falsa riga di quanto fatto per [contact-list-component](src/app/modules/contact-list/contact-list-component/contact-list-component.component.ts) continuare l'implementazione di [to-do-list](src/app/modules/to-do-list/to-do-list-component/to-do-list-component.component.ts), aggiungendo:
    - codice HTML simile al precedente;
    - logica per ascoltare gli eventi emessi (To-Do)
    - creare un model `ToDo`
    - creare una pagina simile a [contact-detail](src/app/modules/contact-list/contact-detail/contact-detail.component.ts)
    - creare un service che esponga un Observable
3.  Creare una pagina di login fake per salvare nel localStorage un token ed inserire sulle restanti pagine una Guard globale che verifica se il token è presente ed è valido. Un token è valido se il metodo `verifyToken` restituisce una Promise con valore positivo. Sono quindi necessari:
    - il service `ProfileService` che espone i metodi:
      - `verifyToken(token): Promise<boolean>`
      - `checkCredientials(username, pwd): Promise<boolean>`
      - `getTokenByCredentials(username, pwd): Promise<string | undefined>`
    - il componente `Login` che consente l'inserimento di username e password e contiene un bottone che se cliccato chiama `checkCredientials` e poi `getTokenByCredentials`
    - una Guard `ProfileGuard` che verifica la presenza del token nel localStorage.

Per creare le risorse necessarie si consiglia di:
 - per un componente digitare `ng g c NOME_COMPONENTE` nella cartella di destinazione
 - per un service `ng g s NOME_SERVICE`
