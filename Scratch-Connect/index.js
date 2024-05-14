scratchconnect={
  home:{
    news:(limit=10,offset=0)=>{
      fetch("https://api.scratch.mit.edu/news?limit="+limit.toString()+"&offset="+offset.toString()).then(res=>res.json).then(result=>return result).catch(console.error("scratchconnect:error with home.news()"))
    }
  }
}
/*
def get_news(*, limit=10, offset=0):
    return requests.get(f"https://api.scratch.mit.edu/news?limit={limit}&offset={offset}").json()

def featured_projects():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["community_featured_projects"]

def featured_studios():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["community_featured_studios"]

def top_loved():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["community_most_loved_projects"]

def top_remixed():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["community_most_remixed_projects"]

def newest_projects():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["community_newest_projects"]

def curated_projects():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["curator_top_projects"]

def design_studio_projects():
    return requests.get("https://api.scratch.mit.edu/proxy/featured").json()["scratch_design_studio"]

def search_posts(*, query, order="newest", page=0):
    try:
        data = requests.get(f"https://scratchdb.lefty.one/v3/forum/search?q={query}&o={order}&page={page}").json()["posts"]
        return_data = []
        for o in data:
            a = forum.ForumPost(id = o["id"])
            a._update_from_dict(o)
            return_data.append(a)
        return return_data
    except Exception:
        return []

def total_site_stats():
    data = requests.get("https://scratch.mit.edu/statistics/data/daily/").json()
    data.pop("_TS")
    return data

def monthly_site_traffic():
    data = requests.get("https://scratch.mit.edu/statistics/data/monthly-ga/").json()
    data.pop("_TS")
    return data

def country_counts():
    return requests.get("https://scratch.mit.edu/statistics/data/monthly/").json()["country_distribution"]

def age_distribution():
    data = requests.get("https://scratch.mit.edu/statistics/data/monthly/").json()["age_distribution_data"][0]["values"]
    return_data = {}
    for value in data:
        return_data[value["x"]] = value["y"]
    return return_data

def get_health():
    return requests.get("https://api.scratch.mit.edu/health").json()
*/