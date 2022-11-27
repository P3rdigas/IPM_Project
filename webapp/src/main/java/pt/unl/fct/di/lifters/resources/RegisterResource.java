package pt.unl.fct.di.lifters.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.commons.codec.digest.DigestUtils;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Key;
import com.google.cloud.datastore.Transaction;

import pt.unl.fct.di.lifters.utils.RegisterData;

@Path("/register")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class RegisterResource {

	private final Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

	public RegisterResource() {
		// Nothing to be done here
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response doRegister(RegisterData data) {

		Transaction txn = datastore.newTransaction();

		try {

			Key userKey = datastore.newKeyFactory().setKind("User").newKey(data.getUsername());

			Entity entity = txn.get(userKey);

			if (entity != null) {

				txn.rollback();
				return Response.status(Status.CONFLICT).entity("Username already exists.").build();

			}

			String hashedPw = DigestUtils.sha512Hex(data.getPassword());

			Entity user = Entity.newBuilder(userKey).set("user_pwd", hashedPw)
													.set("user_name", data.getName())
													.set("user_email", data.getEmail())
													.set("user_gender", data.getGender())
													.set("user_age", data.getAge())
													.set("user_height", data.getHeight())
													.set("user_weight", data.getWeight())
													.set("user_fileURL", data.getFileURL())
													.build();

			txn.put(user);
			txn.commit();
			return Response.ok().build();

		} finally {

			if (txn.isActive())
				txn.rollback();
		}
	}
}
