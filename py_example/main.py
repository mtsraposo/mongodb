from pymongo import MongoClient
import json
import pprint


def get_mongo_client(credentials_path):
    credentials_file = open(credentials_path, "r")
    credentials_str = credentials_file.read()
    credentials_file.close()
    credentials = json.loads(credentials_str)
    uri = f"mongodb+srv:" \
          f"//{credentials['username']}:{credentials['password']}" \
          f"@{credentials['cluster']}.mongodb.net"
    return MongoClient(uri)


def print_agg_collection(collection, pipeline):
    for doc in collection.aggregate(pipeline):
        pprint.pprint(doc)


if __name__ == "__main__":
    credentials_path = "../mongodb_credentials.json"
    client = get_mongo_client(credentials_path)
    print_agg_collection(collection=client['sample_airbnb']['listingsAndReviews'],
                         pipeline=[
                             {
                                 '$match': {
                                     'amenities': 'Wifi'
                                 },
                             }, {"$project": {"name": 1, "_id": 0}}
                         ])
