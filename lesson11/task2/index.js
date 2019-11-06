const sortContacts = (contactsArray, isAsc) => {
    return contactsArray.sort((a, b) => {
        if (isAsc) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
}
