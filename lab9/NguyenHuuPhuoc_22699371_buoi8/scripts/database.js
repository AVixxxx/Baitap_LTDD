

export async function getJobs(db) {
  return await db.getAllAsync("SELECT * FROM jobs");
}

export async function addJob(db, job) {
  return await db.runAsync("INSERT INTO jobs (job) VALUES (?)", [job]);
}

export async function updateJob(db, job, id) {
  return await db.runAsync("UPDATE jobs SET job = ? WHERE id = ?", [job, id]);
}

export async function deleteJob(db, id) {
  return await db.runAsync("DELETE FROM jobs where id = ?", [id]);
}
