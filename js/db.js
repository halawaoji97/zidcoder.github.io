const dbPromised = idb.open('ligaSpanyol-app', 2, function (upgradeDB) {
    const teamsObjectStore = upgradeDB.createObjectStore('teams', {
        keyPath: "id"
    });
    teamsObjectStore.createIndex('team.id', 'team.id', {
        unique: false
    });
});

function addToFavorite(team) {
    console.log(team);
    dbPromised
        .then(function (db) {
            let tx = db.transaction('teams', 'readwrite');
            let store = tx.objectStore('teams');
            console.log(team);
            store.put(team);

            return tx.complete;
        })
        .then(function () {
            alert('Team saved in favorite');
        })
        .catch(function (error) {
            alert('Save failed , ' + error);
        });
}

function deleteTeams(id) {
    dbPromised
        .then(function (db) {
            let tx = db.transaction('teams', 'readwrite');
            let store = tx.objectStore('teams');
            store.delete(id);
            return tx.complete;
        })
        .then(function () {
            alert('Deleted succsses');
        })
        .catch(function (error) {
            alert('Delete failed ,' + error)
        })
}



function getAll() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                let tx = db.transaction('teams', 'readonly');
                let store = tx.objectStore('teams');
                return store.getAll()
            })
            .then(function (teams) {
                resolve(teams);
            })
    })
}

function getById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                let tx = db.transaction("teams", "readonly");
                let store = tx.objectStore("teams");
                return store.get(id);
            })
            .then(function (team) {
                resolve(team);
            });
    });
}