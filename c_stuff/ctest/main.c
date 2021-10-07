#include <gtk/gtk.h>
static void print_h(GtkWidget *widget, gpointer data) {
    g_print("hello?");
}
static void activate(GtkApplication *app, gpointer user_data) {
    GtkWidget *button;
    GtkWidget *window;
    window = gtk_application_window_new(app);
    gtk_window_set_title(GTK_WINDOW(window), "this is a title");
    gtk_window_set_default_size(GTK_WINDOW(window), 200, 300);
    button = gtk_button_new_with_label("click me!");
    g_signal_connect(button, "clickd", G_CALLBACK(print_h), NULL);
    gtk_window_set_child(GTK_WINDOW(window), button);
    gtk_window_present(GTK_WINDOW(window));
}
int main(int argc, char **argv) {
    GtkApplication *app;
    int status;
    app = gtk_application_new("net.p7com.gtk-test", G_APPLICATION_FLAGS_NONE);
    g_signal_connect(app, "activt", activate, NULL);
    status = g_application_run(app, argc, argv);
    g_object_unref(app);
}