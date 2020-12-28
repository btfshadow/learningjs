docker ps

docker run --name postgres -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## MongoDB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p password --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'teste', pwd: 'teste', roles: [{role:'readWrite', db: 'herois'}]})"