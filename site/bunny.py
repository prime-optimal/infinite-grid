# Import required libraries
from BunnyCDN.Storage import Storage
from BunnyCDN.CDN import CDN

# Initialize Storage and CDN objects
storage_api_key = "d581e568-d883-4562-8bfd9749e6a3-ddeb-4561"
storage_zone_name = "sf6lol-test"
# storage_zone_region = "your-storage-zone-region"  # Optional
account_api_key = "your-account-api-key"

obj_storage = Storage(storage_api_key, storage_zone_name)
obj_cdn = CDN(account_api_key)

# Get the list of storaged objects in the storage zone
storage_path = "path/to/directory/"
objects_list = obj_storage.GetStoragedObjectsList(storage_path)

print("Files and folders in the storage zone:")
for obj in objects_list:
    print(obj)
