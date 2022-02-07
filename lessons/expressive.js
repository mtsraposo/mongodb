// Expressive operator
db.trips.find({
    "$expr": {"$eq": ["$end station id", "$start station id"]}
}).count()

db.trips.find({
    "$expr": {
        "$and": [{"$gt": ["$tripduration", 1200]},
            {"$eq": ["$end station id", "$start station id"]}
        ]
    }
}).count()

db.companies.find({"$expr": {"$eq": ["$permalink", "$twitter_username"]}})