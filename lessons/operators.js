/* How many companies in the sample_training.companies dataset were

  either founded in 2004

  [and] either have the social category_code [or] web category_code,
  [or] were founded in the month of October

  [and] also either have the social category_code [or] web category_code?
*/
db.companies.find({
    "$and": [
        {
            "$or": [{"founded_year": 2004},
                {"founded_month": 10}]
        },
        {
            "$or": [{"category_code": "web"},
                {"category_code": "social"}]
        }]
}).count()

/* How many zips in the sample_training.zips dataset are neither over-populated nor under-populated?

   In this case, we consider population of more than 1,000,000 to be over- populated and less than 5,000
   to be under-populated.
*/
db.zips.find({"pop": {"$gte": 5000, "$lte": 1000000}}).count()

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

// Array operators and Projections
db.listingsAndReviews.find({
    "amenities": {
        "$size": 20,
        "$all": ["Internet", "Wifi", "Kitchen",
            "Heating", "Family/kid friendly",
            "Washer", "Dryer", "Essentials",
            "Shampoo", "Hangers",
            "Hair dryer", "Iron",
            "Laptop friendly workspace"]
    }
}).pretty()

db.listingsAndReviews.find(
    {
        "$and": [
            {"accommodates": {"$gt": 6}},
            {"reviews": {"$size": 50}}]
    },
    {"name": 1, "_id": 0}
)

db.listingsAndReviews.find(
    {
        "$and": [
            {"property_type": "House"},
            {"amenities": "Changing table"}]
    }
).count()

db.grades.find({ "class_id": 431 },
    { "scores": { "$elemMatch": { "score": { "$gt": 85 } } }
    })

db.grades.find({ "scores": { "$elemMatch": { "type": "extra credit" } }
})

db.companies.find({
    "offices": {"$elemMatch": {"city": "Seattle"}}
}).count()