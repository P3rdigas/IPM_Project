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
import com.google.gson.Gson;

import pt.unl.fct.di.lifters.utils.LoginData;

@Path("/login")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class LoginResource {

    private final Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    private final Gson g = new Gson();

    public LoginResource() {    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response doLogin(LoginData data) {

        Key userKey = datastore.newKeyFactory().setKind("User").newKey(data.getUsername());

        Transaction txn = datastore.newTransaction();

        try {

            Entity user = txn.get(userKey);
            if (user == null) {
                txn.rollback();
                return Response.status(Status.NOT_FOUND).entity("Utilizador não esxite").build();
            }

            String hashedPwd = user.getString("user_pwd");

            if (hashedPwd.equals(DigestUtils.sha512Hex(data.getPassword()))) {
                return Response.ok(g.toJson(user)).build();
            } else {
                txn.rollback();
                return Response.status(Status.FORBIDDEN).entity("Password errada.").build();
            }
        } catch (Exception e) {
            txn.rollback();
            return Response.status(Status.INTERNAL_SERVER_ERROR).entity("exception e").build();
        } finally {
            if (txn.isActive())
                txn.rollback();
        }
    }

}
