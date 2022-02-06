/* How many companies in the sample_training.companies dataset were

  either founded in 2004

  [and] either have the social category_code [or] web category_code,
  [or] were founded in the month of October

  [and] also either have the social category_code [or] web category_code?
*/
db.companies.find({ "$and": [
    { "$or": [ { "founded_year": 2004 },
               { "founded_month": 10 } ] },
    { "$or": [ { "category_code": "web" },
               { "category_code": "social" }]}]}).count()

/* How many zips in the sample_training.zips dataset are neither over-populated nor under-populated?

   In this case, we consider population of more than 1,000,000 to be over- populated and less than 5,000
   to be under-populated.
*/
db.zips.find({ "pop": { "$gte": 5000, "$lte": 1000000 }}).count()